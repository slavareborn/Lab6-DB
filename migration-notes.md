# Migration Notes

1. **init**: Створення початкової схеми БД (Person, Book, Staff...).
2. **add-review-table**: Додано таблицю `Review` для відгуків про книги.
3. **add-book-available**: Додано поле `isAvailable` до таблиці `Book`.
4. **rename-available-to-instock**: Поле `isAvailable` замінено на `inStock`.

## 1. Ініціалізація та Інтроспекція (`init`)

**Команда:** `npx prisma migrate dev --name init`

**Опис:**
Оскільки база даних вже містила таблиці (`book`, `person`, `author`, `staff` тощо), створені попередньо через SQL-скрипт, першим кроком було виконання "базлайнінгу" (baselining). Це дозволило синхронізувати схему Prisma з реальним станом бази даних та створити точку відліку для майбутніх змін.

**Результат:**
Prisma автоматично згенерувала моделі для всіх існуючих таблиць у файлі `schema.prisma`.

---

## 2. Додавання нової таблиці (`add-review-table`)

**Команда:** `npx prisma migrate dev --name add-review-table`

**Опис:**
Додано нову сутність **`Review`** для зберігання відгуків користувачів про книги. Реалізовано зв'язок "один-до-багатьох" (One-to-Many): одна книга може мати багато відгуків.

**Зміни в коді (`schema.prisma`):**

**1. Створено нову модель:**
```prisma
model Review {
  id        Int     @id @default(autoincrement())
  rating    Int
  comment   String?
  book_id   Int
  book      book    @relation(fields: [book_id], references: [book_id])
}
```

**2. Оновлено модель book (додано зворотний зв'язок):**
```prisma
model book {
  // ... існуючі поля ...
  Review Review[] 
}
```

---

## 3. Зміна таблиці: Додавання поля (add-book-available)
Команда: npx prisma migrate dev --name add-book-available

**Опис:** До таблиці book додано нове логічне поле isAvailable (зі значенням за замовчуванням true), щоб відстежувати, чи доступна книга для видачі.

---

## 4. Рефакторинг: Перейменування поля (rename-available-to-instock)
Команда: npx prisma migrate dev --name rename-available-to-instock

**Опис:** Було прийнято рішення змінити назву поля з isAvailable на inStock. У Prisma це технічно виконується як операція видалення старого стовпця та створення нового.

**Фрагмент схеми:**
```prisma
model book {
  // ...
  // isAvailable Boolean @default(true)  <-- Видалено
  inStock     Boolean @default(true)     // <-- Додано
}
```

---

## 5. Перевірка результатів (Prisma Studio)
Для підтвердження коректності схеми та роботи зв'язків було використано Prisma Studio (npx prisma studio). В папці images наведено скріншоти, що демонструють успішне додавання даних.