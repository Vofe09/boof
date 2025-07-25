const textA = document.getElementById("textA");
const textB = document.getElementById("textB");

// Ссылки на базу данных
const refA = db.ref("buffer/textA");
const refB = db.ref("buffer/textB");

// Отправка текста в базу
textA.addEventListener("input", () => {
  refA.set(textA.value);
});
textB.addEventListener("input", () => {
  refB.set(textB.value);
});

// Получение обновлений из базы
refA.on("value", (snapshot) => {
  if (document.activeElement !== textA) {
    textA.value = snapshot.val() || "";
  }
});
refB.on("value", (snapshot) => {
  if (document.activeElement !== textB) {
    textB.value = snapshot.val() || "";
  }
});
