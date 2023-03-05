function copytext(text) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(text);
  
    // Alert the copied text
    alert("계좌번호를 복사했습니다. 은행앱에 붙여넣기 하실 수 있습니다: " + text);
  }