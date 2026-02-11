fetch("https://discord.com/api/webhooks/1471208213528707370/yPPhoaKzY-W1W9oND899kPb0cVSDwVdssJ6qPp1da7dtFSNn5El36vqT5WQ1z2vh17He", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({content: "Test message"})
});