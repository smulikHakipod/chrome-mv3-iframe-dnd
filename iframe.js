document.addEventListener("dragover", () => {
    document.body.style.background = "green";
  });

  const end = () => {
    document.body.style.background = "";
  };

  document.addEventListener("dragenter", console.log);
  document.addEventListener("dragend", end);
  document.addEventListener("dragleave", end);