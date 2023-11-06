// Store the users here so we don't have to query the database each time
const users = {};

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  let user = users[userId];

  if (!user) {
    user = await fetchUserFromDatabase(userId);
    users[userId] = user;
  }

  if (!user) return res.status(404).json({ error: 'User not found' });

  // Check the permissions of the current user
  if (!loggedInUser().permissions.includes('admin'))
    res.status(403).json({ error: 'Permission denied' });

  // Send the user back in the response
  res.status(200).json(user);
});