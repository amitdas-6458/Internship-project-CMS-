document.getElementById('addTextBlock').addEventListener('click', function() {
    const contentArea = document.getElementById('contentArea');
    const newTextBlock = document.createElement('div');
    newTextBlock.className = 'modular-block text-block';
    newTextBlock.innerHTML = `
        <h2 contenteditable="true">Text Block Title</h2>
        <p contenteditable="true">This is a modular text block. You can edit this content.</p>
        <button class="remove-block">Remove</button>
        <button class="download">Download</button>
    `;
    contentArea.appendChild(newTextBlock);
});

// Event delegation for removing blocks
document.getElementById('contentArea').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-block')) {
        e.target.parentElement.remove();
    }
});

// Event delegation for download context
document.getElementById('contentArea').addEventListener('click', function(e) {
    if (e.target.classList.contains('downoload')) {
        e.target.parentElement.download();
    }
});