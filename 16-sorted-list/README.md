#רשימה ממוינת
נו פקד בשם SortableTable שתפקידו להציג טבלא עם אפשרות למיון השורות:

הפקד יקבל כקלט מערך דו-מימדי של נתונים, כאשר השורה הראשונה היא שורת הכותרות.

לחיצה על כל עמודה בשורה הראשונה ממיינת את השורות בסדר עולה או יורד במיון לקסיקוגרפי (מ a עד z).
###דוגמא לשימוש בפקד:
   
<code>
const data = [
    ['Name', 'Country', 'Email'],
    ['dan', 'Israel', 'dan@gmail.com'],
    ['dana', 'Israel', 'dana@gmail.com'],
    ['anna', 'Israel', 'anna@gmail.com'],
    ['zina', 'UK', 'zina@gmail.com'],
];
</code>
<br>
<code>
return div
    SortableTable data={data} />
/div
</code>

<p>הפקד יציג את כל הנתונים בטבלא, לחיצה על עמות השמות תסדר את השורות לפי השם (קודם מ a ל-z ולחיצה שניה מ z ל a), ואותו דבר לגבי שאר העמודות.
   
</p>