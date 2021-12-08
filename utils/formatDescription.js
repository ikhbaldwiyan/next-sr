export default function(profile) {
  let value = profile && profile.description;
  const description = value.replace(/\n/g, " <br /> ").replace(/"/g, "");
  
  function formatDescription(text) {
    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      function (match, space, url) {
        let hyperlink = url;
        if (!hyperlink.match("^https?://")) {
          hyperlink = "http://" + hyperlink;
        }
        let title = profile.room_url_key.includes("JKT48") ? `${profile.room_url_key.slice(6)} JKT48` : hyperlink
        return space + '<a href="' + hyperlink + '" target="_blank">' + title + "</a>";
      }
    );
  }

  return formatDescription(description);
}