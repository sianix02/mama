alert("HAPPY MOTHER'S DAY MA! FROM: Family")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};