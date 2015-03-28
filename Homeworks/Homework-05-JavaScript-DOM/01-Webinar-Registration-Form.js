'use strict';

function toggleHiddenForm() {
    var checkbox = document.getElementById('invoice'),
        hiddenForm = document.getElementById('hidden');

    hiddenForm.style.visibility = checkbox.checked ? 'visible' : 'hidden';
}