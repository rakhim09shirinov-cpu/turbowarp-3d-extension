# TurboWarp 3D Extension v2.0

🎮 Полнофункциональное 3D расширение для TurboWarp с поддержкой загрузки 3D моделей, физикой, тенями и профессиональным освещением.

## ✨ Основные возможности

### 📦 Поддерживаемые форматы моделей
- **OBJ + MTL** - с материалами
- **GLTF/GLB** - универсальный формат (рекомендуется)
- **FBX** - профессиональный формат с анимациями
- **COLLADA (DAE)** - универсальный формат обмена
- **STL** - для 3D печати

### 🎨 Графика и эффекты
- ✅ **Реалистичное освещение** - 4 источника света
- ✅ **Динамические тени** - PCF тени высокого качества (2048x2048)
- ✅ **PBR материалы** - металличность и шершавость
- ✅ **Туман и постобработка** - атмосферные эффекты
- ✅ **SRGB цветовое пространство** - правильные цвета

### 💥 Физика
- ✅ **Реалистичная физика** - гравитация, столкновения
- ✅ **Применение сил** - движение и взаимодействия
- ✅ **Трение и демпинг** - естественное поведение
- ✅ **Поддержка всех типов фигур** - коробки, сферы, цилиндры

### 🎮 Управление
- ✅ **Позиция, вращение, масштаб**
- ✅ **Физические силы**
- ✅ **Материалы и цвета**
- ✅ **Прямое управление и Scratch блоки**

## 🚀 Быстрый старт

### 1. Инициализация
```javascript
await window.turbowarp3d.init();
```

### 2. Загрузить модель

**Автоматическое определение формата:**
```javascript
const modelName = await window.turbowarp3d.loadModel(
  'https://example.com/model.glb',
  'myModel'
);
```

**OBJ с материалами:**
```javascript
const modelName = await window.turbowarp3d.loadOBJ(
  'https://example.com/model.obj',
  'https://example.com/model.mtl'
);
```

**GLTF/GLB:**
```javascript
const modelName = await window.turbowarp3d.loadGLTF(
  'https://example.com/model.glb'
);
```

**FBX:**
```javascript
const modelName = await window.turbowarp3d.loadFBX(
  'https://example.com/model.fbx'
);
```

**COLLADA (DAE):**
```javascript
const modelName = await window.turbowarp3d.loadCOLLADA(
  'https://example.com/model.dae'
);
```

**STL:**
```javascript
const modelName = await window.turbowarp3d.loadSTL(
  'https://example.com/model.stl'
);
```

### 3. Управление моделью

```javascript
// Установить позицию
window.turbowarp3d.setModelPosition('myModel', 0, 5, 0);

// Установить масштаб
window.turbowarp3d.setModelScale('myModel', 2, 2, 2);

// Установить вращение
window.turbowarp3d.setModelRotation('myModel', 0, Math.PI/4, 0);

// Применить силу (физика)
window.turbowarp3d.applyForceToModel('myModel', 100, 50, 0);

// Установить материал
window.turbowarp3d.setModelMaterial('myModel', '#ff0000', 0.5, 0.5);

// Получить позицию
const pos = window.turbowarp3d.getModelPosition('myModel');
console.log(pos); // { x, y, z }

// Удалить модель
window.turbowarp3d.removeModel('myModel');
```

## 🎮 Scratch блоки

```
📍 Инициализация
├─ инициализировать 3D сцену

📦 Загрузка
├─ загрузить модель URL: [URL] имя: [NAME]
├─ загрузить OBJ [OBJ] с материалами [MTL]
├─ загрузить GLTF/GLB [URL]
├─ загрузить FBX [URL]
├─ загрузить COLLADA [URL]
└─ загрузить STL [URL]

🎯 Управление
├─ установить позицию [NAME] X: [X] Y: [Y] Z: [Z]
├─ установить масштаб [NAME] X: [X] Y: [Y] Z: [Z]
├─ установить вращение [NAME] X: [X] Y: [Y] Z: [Z]
└─ удалить модель [NAME]

⚡ Физика
├─ применить силу [NAME] X: [X] Y: [Y] Z: [Z]
└─ установить скорость [NAME] X: [X] Y: [Y] Z: [Z]

🎨 Материалы
└─ установить материал [NAME] цвет: [COLOR] металл: [METAL] шершавость: [ROUGH]

📊 Значения
├─ X позиция [NAME] (репортер)
├─ Y позиция [NAME] (репортер)
└─ Z позиция [NAME] (репортер)
```

## 📋 Примеры использования

### Пример 1: Загрузить и бросить куб
```javascript
// Инициализация
await window.turbowarp3d.init();

// Создание куба
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
window.turbowarp3d.scene.add(cube);

// Применить физику
window.turbowarp3d.applyForceToModel('cube', 100, 200, 50);
```

### Пример 2: Загрузить модель с интернета
```javascript
// Загрузить утку из примеров Three.js
const duck = await window.turbowarp3d.loadModel(
  'https://threejs.org/examples/models/gltf/Duck/glTF/Duck.gltf',
  'duck'
);

// Установить позицию
window.turbowarp3d.setModelPosition('duck', 0, 5, 0);

// Применить материал
window.turbowarp3d.setModelMaterial('duck', '#00ff00', 0.8, 0.2);

// Подбросить
window.turbowarp3d.applyForceToModel('duck', 0, 100, 0);
```

### Пример 3: Несколько моделей с взаимодействием
```javascript
await window.turbowarp3d.init();

// Загрузить две модели
const model1 = await window.turbowarp3d.loadModel('model1.glb', 'obj1');
const model2 = await window.turbowarp3d.loadModel('model2.glb', 'obj2');

// Расположить их
window.turbowarp3d.setModelPosition('obj1', -5, 5, 0);
window.turbowarp3d.setModelPosition('obj2', 5, 5, 0);

// Применить силы
setInterval(() => {
  window.turbowarp3d.applyForceToModel('obj1', 10, 0, 0);
  window.turbowarp3d.applyForceToModel('obj2', -10, 0, 0);
}, 100);
```

## 🔧 Конфигурация

### Качество графики
Измените разрешение теней в `extension.js`:
```javascript
this.renderer.shadowMap.mapSize = new THREE.Vector2(2048, 2048);
```

### Освещение
Настройте интенсивность источников света:
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Окружающее
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Солнце
const pointLight = new THREE.PointLight(0xff0000, 1, 200); // Точка
```

### Физика
Измените гравитацию и трение:
```javascript
this.world.gravity.set(0, -9.82, 0); // Гравитация
this.world.defaultContactMaterial.friction = 0.3; // Трение
```

## 📚 Где найти 3D модели

- **Sketchfab** - https://sketchfab.com (скачивайте в GLTF)
- **CGTrader** - https://www.cgtrader.com
- **TurboSquid** - https://www.turbosquid.com
- **Free3D** - https://www.free3d.com
- **The Smithsonian Open Collections** - https://3d.si.edu

## ⚙️ Установка в TurboWarp

1. Откройте TurboWarp
2. Нажмите на "Расширения"
3. Выберите "Загрузить пользовательское расширение"
4. Вставьте URL на `extension.js`

Или используйте в своем проекте:
```html
<script src="https://your-domain.com/extension.js"></script>
```

## 🐛 Решение проблем

### Модель не загружается
- Проверьте URL (должен быть доступен с CORS)
- Проверьте формат файла
- Откройте консоль браузера для ошибок

### Плохая производительность
- Уменьшите качество теней: `2048 → 1024`
- Уменьшите количество объектов на сцене
- Используйте GLB вместо OBJ+MTL

### Модель выглядит черной
- Проверьте освещение
- Включите тени: `castShadow = true`
- Проверьте материалы модели

## 📝 Лицензия

MIT License - свободно используйте в своих проектах!

## 🙏 Благодарности

- **Three.js** - https://threejs.org
- **Cannon-es** - https://github.com/pmndrs/cannon-es
- **TurboWarp** - https://turbowarp.org

---

**Создано для TurboWarp** 🚀
