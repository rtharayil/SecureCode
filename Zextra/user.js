const app = express();
const cache = require('cache-manager');

// Create an in-memory cache with a maximum size of 100 entries
const users = cache.caching({
  store: 'memory',
  max: 100,
  ttl: 300 * 1000, // 5 minutes
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  // Check the permissions of the current user
  if (!loggedInUser().permissions.includes('admin'))
    return res.status(403).json({ error: 'Permission denied' });

  let user;

  try {
    // We use cache-manager to wrap our expensive call in a cache with automatic TTL and max entries
    user = await memoryCache.wrap(
      `user_${userId}`,
      () => fetchUserFromDatabase(userId),
      ttl,
    );
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
    return;
  }

  if (!user) res.status(404).json({ error: 'User not found.' });

  res.status(200).json(user);
});