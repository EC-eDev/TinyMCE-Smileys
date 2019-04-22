# TinyMCE-Smileys
TinyMCE est un éditeur de texte que l'on peut intégrer sur nos propres sites (https://www.tiny.cloud/).
Ce plugin ajoute une cinquantaine de smileys à l'éditeur !

## Installation
Vous devez avoir une installation correcte de l'éditeur TinyMCE (voir https://www.tiny.cloud/). 

Vous devez ajouter le script Smileys après le script de TinyMCE dans les balises _head_ de votre page. Ajoutez ensuite le script Smileys à votre code TinyMCE (dans _plugins_ et _toolbar_).

```html
<!DOCTYPE html>
<html>
<head>
  
  <script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=[VOTRE CLÉ D'API]"></script>
  <script type="text/javascript" src="tinymce-smileys.js"></script>
  <script>
  tinymce.init({
    selector: '#textarea'
    toolbar: 'smileys',
    plugins: 'smileys'
  });
  </script>
  
</head>
<body>
  
  <form>
    <textarea id="textarea">Coucou</textarea>
  </form>
  
</body>
</html>
```
