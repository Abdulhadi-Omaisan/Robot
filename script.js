// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
    
    // ابحث عن كل عناصر القائمة التي تحتوي على قائمة فرعية
    const submenuItems = document.querySelectorAll('.has-submenu > span');

    // أضف مستمع "ضغط" (click event) لكل واحد منها
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            // "this" تشير إلى الـ span الذي تم الضغط عليه
            // "parentElement" هو الـ li الأب
            const parentLi = this.parentElement;
            
            // "toggle" تعني: إذا كان الكلاس موجوداً، احذفه. إذا لم يكن، أضفه.
            parentLi.classList.toggle('open');
        });
    });
});

/* --- (كود جديد) --- */
/* الكود الخاص بتبديل المحتوى عند النقر */

// 1. احصل على جميع روابط المحتوى
const contentLinks = document.querySelectorAll('.sidebar .submenu a');

// 2. احصل على جميع أقسام المحتوى
const contentSections = document.querySelectorAll('.content-section');

// 3. أضف مستمع "ضغط" لكل رابط
contentLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // 4. امنع السلوك الافتراضي للرابط (القفز لأسفل)
        event.preventDefault(); 
        
        // 5. احصل على الـ ID الخاص بالقسم المطلوب (مثل: #info-company)
        const targetId = this.getAttribute('href');
        
        // 6. أزل كلاس "active" من جميع الأقسام
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // 7. ابحث عن القسم المطابق للرابط
        const targetSection = document.querySelector(targetId);
        
        // 8. أضف كلاس "active" للقسم المطلوب ليظهر
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});