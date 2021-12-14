# Personnalisation de Blocklino
Ce guide permet de définir la procédure pour personnaliser ce fork du projet Blocklino, à savoir ajouter des blocs, des boîtes à outils et permettre à ces composants d'envoyer du code à une carte arduino.
Ces instructions sont spécifiques au projet actuel, et servent de mémo pour faciliter sa personnalisation, dans le cadres des missions réalisées par les Francas de Seine-Maritime.

Si vous êtes débutant avec Blockly, rendez-vous [ici](https://developers.google.com/blockly/guides/overview) pour avoir un guide faisant le tour de ses principaux concepts. Les notions de programmation en bloc, toolbox, workpace ou autres demandent à être comprises pour suivre ce guide, et ne seront pas redéfinies ici.
## Ajout d'une nouvelle catégorie à la boîte à outils
La boîte à outils par défaut utilisée par le projet est dans le fichier [`toolbox/toolbox_arduino_all.xml`](toolbox/toolbox_arduino_all.xml). Chaque nouvelle catégorie doit être placée dans ce fichier, entre les balises `<toolbox>` et `</toolbox>`.

Supponsons que l'on veut créer une catégorie, avec pour nom `francas_category`. N'importe quel autre nom est possible mais attention à ne pas mettre d'espace.

Une catégrie a la suntaxe suivante :
 ```xml
<category name="francas_category" colour="#ff8000">
    <block type="francas_block1"></block>
    <block type="francas_block2"></block>
    <!---etc.-->
</category>
 ```
Pour s'assurer que la catégorie est affichée par défaut dans la boîte à outils, modifiez la variable suivante pour inclure le nom de notre nouvelle catégorie:
```xml
<parametre id="defaultCategories">CAT_LOGIC,CAT_MATH,...,CAT_STOCKAGE,francas_category</parametre>

```

Pour personnaliser le nom de notre catégorie (celui affiché à l'utilisateur), il faut ajouter la variable `Blockly.Msg.francas_category= "Catégorie Des Francas";` dans le fichier [`www/lang/msg_fr.js`](www/lang/msg_fr.js).

Si la catégorie n'apparaît pas au chargement du site, il se peut que vous deviez l'activer dans les préférences comme suit :
![Activation de la catégorie dans les paramètres du site](Screenshot_20211210_160614.png)

## Création d'un bloc
Pour faciliter l'écriture du code définissant le comportement de notre bloc, nous pouvons utiliser l'outil Blockly Factory, disponible [en ligne](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) ou [en local](www/factory.html).
![](Screenshot_20211209_131412.png)
Une fois le bloc crée, différents morceaux de code sont à insérer dans le projet de la manière suivante:
 - Le code dans la zone en rouge, celui de définition du bloc, doit être mis dans le fichier [`blocs&generateurs/arduino_blocs.js`](blocs&generateurs/arduino_blocs.js) .
 - Le code dans la zone en bleu, celui qui génère le code à envoyer à la carte arduino en fonction des paramètres du bloc, doit être mis dans le fichier [`blocs&generateurs/blockly_generateurs_cpp.js`](blocs&generateurs/blockly_generateurs_cpp.js).
 - La ligne `<block type="francas_block1"></block>` doit être ajoutée dans le fichier [`toolbox/toolbox_arduino_all.xml`](toolbox/toolbox_arduino_all.xml), au sein de la catégorie voulue.