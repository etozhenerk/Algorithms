/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  const set = new Set();

  for (let i = 0; i < emails.length; i++) {
    const [localName, domainName] = emails[i].split("@");
    const currentName =
      localName
        .slice(
          0,
          localName.indexOf("+") > 0 ? localName.indexOf("+") : localName.length
        )
        .replaceAll(".", "") +
      "@" +
      domainName;

    set.add(currentName);
  }

  return set.size;
};
