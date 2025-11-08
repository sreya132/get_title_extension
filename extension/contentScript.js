(async () => {
  console.log("Demo content script active on:", window.location.href);

  const getText = (selector) => {
    const el = document.querySelector(selector);
    return el ? el.innerText.trim() : "";
  };

  // Wait a bit for content
  await new Promise((r) => setTimeout(r, 2000));

  // Example DOM structure (you control this)
  const profileData = {
    name: getText(".name"),
    url: window.location.href,
    about: getText(".about"),
    bio: getText(".bio"),
    location: getText(".location"),
    followerCount: parseInt((getText(".followers") || "").replace(/\D/g, "")) || null,
    connectionCount: parseInt((getText(".connections") || "").replace(/\D/g, "")) || null,
  };

  console.log("Scraped demo data:", profileData);

  if (!profileData.name) {
    console.warn("No name found — check your mock HTML selectors.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      console.log("Sent demo data to backend!");
    } else {
      console.error("Failed to send:", response.statusText);
    }
  } catch (err) {
    console.error("Network error:", err);
  }
})();
