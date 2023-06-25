// to reset the encode method
const clear = () => {
  document.getElementById("code").value = "";
};
// to reset the decode method
const clear1 = () => {
  document.getElementById("message").value = "";
};
// to encode
const Encode = async () => {
  event.preventDefault();

  let msg = await document.getElementById("msg1").value;
  if (msg) {
    let result = msg.toUpperCase();
    let chars = `0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()[]{}<>,./?|\:;'*/-+`;
    let captcha = "";

    for (let i = 0; i < msg.length; i++) {
      for (let j = 0; j < 4; j++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      captcha += result.charAt(i);
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    hash = captcha;
    document.getElementById("code").value = hash;
  }
};

// to decode

const Decode = async () => {
  event.preventDefault();

  let ans = "";
  let msg1 = await document.getElementById("msg2").value;
  if (msg1) {
    for (let i = 0; i < msg1.length; i++) {
      let asciiCode = msg1.charCodeAt(i);
      let isAlphabetic = asciiCode >= 65 && asciiCode <= 90;
      let isSpace = asciiCode === 32;
      if ((msg1[i] === msg1[i].toUpperCase() && isAlphabetic) || isSpace) {
        ans += msg1[i];
      }
    }

    message = ans.toLocaleLowerCase();

    document.getElementById("message").value = message;
  }
};