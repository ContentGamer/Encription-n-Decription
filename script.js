var msg = "secret message";
const disableInspectElement = true;

document.getElementById("curContent").innerHTML += " " + msg;

const main = (mode, text) => {
  var inputIndex, inputText, key, ledger, outputIndex, outputText;
  inputText = text;
  key = 5;
  ledger =
    "azertyuiopqsdfghjjklmwxcvbn AZERTYUIOPQSDFGHJKLMWXCVBN :$%*;,!?[{/.=?§{] 1234567890";
  outputText = "";

  for (var i = 0; i < inputText.length; i++) {
    const chr = inputText[i];
    inputIndex = ledger.search(chr);

    if (mode === "encrypt") {
      outputIndex = inputIndex + key;
    } else {
      if (mode === "decrypt") {
        outputIndex = inputIndex - key;
      }
    }

    if (outputIndex >= ledger.length) {
      outputIndex = outputIndex - ledger.length;
    } else {
      if (outputIndex < 0) {
        outputIndex = outputIndex + ledger.length;
      }
    }

    outputText = outputText + ledger[outputIndex];
  }
  return outputText;
};

const encrypt = (text) => {
  return main("encrypt", text);
};

const decrypt = (text) => {
  return main("decrypt", text);
};

document.getElementById("encryptedCont").innerHTML += " " + encrypt(msg);
document.getElementById("decryptedCont").innerHTML +=
  " " + encrypt(decrypt(msg));

const changeContent = (text) => {
  msg = text;

  document.getElementById("curContent").innerHTML = "Current Content:";
  document.getElementById("encryptedCont").innerHTML = "Enctypted Content:";
  document.getElementById("decryptedCont").innerHTML = "Decrypted Content:";

  document.getElementById("curContent").innerHTML += " " + msg;
  document.getElementById("encryptedCont").innerHTML += " " + encrypt(msg);
  document.getElementById("decryptedCont").innerHTML +=
    " " + encrypt(decrypt(msg));
};

document.getElementById("changeButton").addEventListener("click", () => {
  const inputID = document.getElementById("inputID");
  changeContent(inputID.value);
});

const ctrlShift = (e, neededKey) => {
  if (e.ctrlKey && e.shiftKey && e.keyCode === neededKey.charCodeAt(0)) {
    return true;
  }
};

if (disableInspectElement) {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  document.onkeydown = (e) => {
    if (event.keyCode === 123) {
      return false;
    }

    if (ctrlShift(e, "I")) {
      return false;
    }

    if (ctrlShift(e, "C")) {
      return false;
    }

    if (ctrlShift(e, "J")) {
      return false;
    }

    if (ctrlShift(e, "U")) {
      return false;
    }
  };
}
