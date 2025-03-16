const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  let text = textInput.value.trim(); // Remove extra spaces
  let words = text.split(/\s+/).filter(word => word.length > 0); // Split by spaces, remove empty words

  wordCount.textContent = words.length;
  charCount.textContent = text.length;
});