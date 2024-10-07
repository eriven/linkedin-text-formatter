// Function to convert text to bold Unicode characters
function convertToBold(text) {
    const boldOffset = 0x1D400 - 0x0041; // Offset between regular and bold uppercase letters in Unicode
    let result = '';
    for (let char of text) {
      if (char >= 'A' && char <= 'Z') {
        result += String.fromCodePoint(char.codePointAt(0) + boldOffset);
      } else if (char >= 'a' && char <= 'z') {
        result += String.fromCodePoint(char.codePointAt(0) + boldOffset + 26);
      } else {
        result += char;
      }
    }
    return result;
  }
  
  // Function to convert text to italic Unicode characters
  function convertToItalic(text) {
    const italicOffset = 0x1D434 - 0x0041;
    let result = '';
    for (let char of text) {
      if (char >= 'A' && char <= 'Z') {
        result += String.fromCodePoint(char.codePointAt(0) + italicOffset);
      } else if (char >= 'a' && char <= 'z') {
        result += String.fromCodePoint(char.codePointAt(0) + italicOffset + 26);
      } else {
        result += char;
      }
    }
    return result;
  }
  
  // Get HTML elements
  const inputText = document.getElementById('input-text');
  const outputText = document.getElementById('output-text');
  const boldButton = document.getElementById('bold-button');
  const italicButton = document.getElementById('italic-button');
  const copyButton = document.getElementById('copy-button');
  
  // Event listeners for buttons
  boldButton.addEventListener('click', () => {
    const text = inputText.value;
    outputText.value = convertToBold(text);
  });
  
  italicButton.addEventListener('click', () => {
    const text = inputText.value;
    outputText.value = convertToItalic(text);
  });
  
  copyButton.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Formatted text copied to clipboard!');
  });