function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> It will be called 3 times, once for the hours, minutes and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// num is assigned the value of totalHours, which is 0 because 61 seconds is less than 1 hour.

// c) What is the return value of pad is called for the first time?
// The return value is "00" because pad converts the number 0 to a string and pads it to ensure it has at least 2 characters, resulting in "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// num is assigned the value of remainingSeconds, which is 1 because 61 seconds has 1 second remaining after accounting for the full minute (60 seconds).

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value is "01" because pad converts the number 1 to a string and pads it to ensure it has at least 2 characters, resulting in "01".
