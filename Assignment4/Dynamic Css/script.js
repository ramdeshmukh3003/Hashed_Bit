document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');
    const colorBox = document.getElementById('colorbox');
    const colorChangeBtn = document.getElementById('colorchange');
    const fontSizeRange = document.getElementById('fontsize');
    const italicBtn = document.getElementById('italic');
    const underlineBtn = document.getElementById('underline');
    const boldBtn = document.getElementById('bold');
    const fontList = document.getElementById('list');
    const getStyleBtn = document.getElementById('getstyle');
    const cssProps = document.getElementById('css-props');

    colorChangeBtn.addEventListener('click', () => {
        const cVal = colorBox.value;
        textContainer.style.color = cVal;
    });
    fontSizeRange.addEventListener('input', () => {
        const fsVal = fontSizeRange.value;
        textContainer.style.fontSize = `${fsVal}px`;
    });
    italicBtn.addEventListener('click', () => {
        textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
    });
    underlineBtn.addEventListener('click', () => {
        textContainer.style.textDecoration = textContainer.style.textDecoration.includes('underline') ? 'none' : 'underline';
    });
    boldBtn.addEventListener('click', () => {
        textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });
    fontList.addEventListener('change', () => {
        const selectFont = fontList.value;
        textContainer.style.fontFamily = selectFont;
    });
    getStyleBtn.addEventListener('click', () => {
        const styleComp = window.getComputedStyle(textContainer);
        const cssTxt = `color: ${colorBox.value}; font-size: ${styleComp.fontSize}; font-family: ${styleComp.fontFamily}; fontistyle: ${styleComp.fontStyle}; font-weight: ${styleComp.fontWeight}; text-decoration: ${styleComp.textDecoration}; `;
        cssProps.textContent = cssTxt;
    });
})
