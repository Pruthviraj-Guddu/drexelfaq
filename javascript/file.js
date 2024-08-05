fetch(
    "https://api.github.com/repos/Pruthviraj-Guddu/drexelfaq/commits/main"
  )
    .then((response) => response.json())
    .then((data) => {
      const commitDate = new Date(data.commit.author.date);
      const formattedDate = commitDate.toLocaleString("en-US", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      document.getElementById(
        "last-updated"
      ).innerText = `Last updated ${formattedDate} EDT`;
    })
    .catch((error) =>
      console.error("Error fetching commit data:", error)
    );
