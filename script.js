// Função para adicionar novo item ao menu
function addItem() {
  const text = document.getElementById('new-item').value.trim();
  if (text === '') {
      alert('Por favor, insira um texto para o item do menu.');
      return;
  }

  const menu = document.getElementById('menu');
  const existingItem = menu.children[0];

  const newItem = document.createElement('div');
  newItem.className = 'menu-item';
  newItem.textContent = text;
  newItem.setAttribute('contenteditable', 'true');

  if (existingItem) {
      const computedStyle = window.getComputedStyle(existingItem);
      newItem.style.backgroundColor = computedStyle.backgroundColor;
      newItem.style.color = computedStyle.color;
      newItem.style.borderRadius = computedStyle.borderRadius;
      newItem.style.borderWidth = computedStyle.borderWidth;
      newItem.style.borderColor = computedStyle.borderColor;
      newItem.style.borderStyle = computedStyle.borderStyle;
      newItem.style.fontSize = computedStyle.fontSize;
      newItem.style.padding = computedStyle.padding;
  }

  menu.appendChild(newItem);
  updateRemoveButtons();
  document.getElementById('new-item').value = '';
}

// Função para remover o último item do menu
function removeItem() {
  const menu = document.getElementById('menu');
  if (menu.children.length > 0) {
      menu.removeChild(menu.lastChild);
  }
}

// Função para remover um item específico do menu
function removeSpecificItem(element) {
  const menu = document.getElementById('menu');
  if (element && element.parentElement === menu) {
      element.remove();
  }
}

// Função para atualizar os botões de remoção
function updateRemoveButtons() {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
      const existingButton = item.querySelector('button');
      if (existingButton) {
          existingButton.remove();
      }

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = '<i class="material-icons">close</i>';
      removeBtn.onclick = () => removeSpecificItem(item);
      removeBtn.className = 'remove-btn';
      item.appendChild(removeBtn);
  });
}

// Função para atualizar o estilo do menu
function updateMenuStyle() {
  const menuContainer = document.querySelector('.menu-container');
  const itemsContainer = document.querySelector('.menu-items');
  const items = document.querySelectorAll('.menu-item');

  menuContainer.style.backgroundColor = document.getElementById('bg-color').value;
  itemsContainer.style.gap = document.getElementById('spacing').value + 'px';

  items.forEach(item => {
      item.style.backgroundColor = document.getElementById('item-bg-color').value;
      item.style.color = document.getElementById('text-color').value;
      item.style.borderRadius = document.getElementById('border-radius').value + 'px';
      item.style.borderWidth = document.getElementById('border-width').value + 'px';
      item.style.borderColor = document.getElementById('border-color').value;
      item.style.borderStyle = 'solid';
      item.style.fontSize = document.getElementById('font-size').value + 'px';
  });
}

// Função para carregar a imagem
function loadImage(event) {
  const image = document.getElementById('menu-image');
  const file = event.target.files[0];
  if (file) {
      image.src = URL.createObjectURL(file);
  }
}

// Função para remover a imagem
function removeImage() {
  const image = document.getElementById('menu-image');
  image.src = '';
}

// Adiciona os eventos de input para atualização em tempo real
document.getElementById('bg-color').addEventListener('input', updateMenuStyle);
document.getElementById('item-bg-color').addEventListener('input', updateMenuStyle);
document.getElementById('text-color').addEventListener('input', updateMenuStyle);
document.getElementById('spacing').addEventListener('input', updateMenuStyle);
document.getElementById('border-radius').addEventListener('input', updateMenuStyle);
document.getElementById('border-width').addEventListener('input', updateMenuStyle);
document.getElementById('border-color').addEventListener('input', updateMenuStyle);
document.getElementById('font-size').addEventListener('input', updateMenuStyle);
document.getElementById('image-upload').addEventListener('change', loadImage);

// Atualiza os botões quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  updateRemoveButtons();
});