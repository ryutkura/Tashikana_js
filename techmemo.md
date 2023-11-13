# エラー解消したらメモするで
## CH5の画像切り替えが上手くいかない
### エラー内容
```
ch5imagescript.js:4 Uncaught TypeError: Cannot set properties of null (setting 'src')
    at thumbs.<computed>.onclick (ch5imagescript.js:4:47)
thumbs.<computed>.onclick @ ch5imagescript.js:4
```
### ChatGPTの解決策
このエラーは、`document.getElementById('bigimg')`がnullを返していることを示しています。エラーメッセージによれば、4行目で`Cannot set properties of null (setting 'src')`となっており、`src`プロパティをnullに対して設定しようとしていることが原因です。

エラーが発生している可能性のある箇所は次のとおりです：

```javascript
document.getElementById('bigimg').src = this.dataset.image;
```

これは`bigimg`というIDを持つ要素を検索していますが、その要素が見つからない場合は`null`が返されます。エラーを解決するためには、`bigimg`というIDを持つ要素がHTMLに存在することを確認してください。

また、HTMLの要素が正しくロードされる前にJavaScriptが実行される可能性があるため、JavaScriptのコードをHTMLの末尾に移動させることも検討してみてください。これにより、DOMが十分に構築された後にJavaScriptが実行されます。

以下は修正されたコードの例です：

```javascript
document.addEventListener('DOMContentLoaded', function () {
    var thumbs = document.querySelectorAll('.thumb');
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
            document.getElementById('bigimg').src = this.dataset.image;
        };
    }
});
```

これにより、DOMが完全にロードされた後にJavaScriptが実行されます。もしまだ問題が解決しない場合は、HTMLのコードやディレクトリの構造に問題がないか再度確認してみてください。

### あかんかったのでHTMLファイルを見せての提案
提供していただいたHTMLコードを見ると、`bigimg`というIDを持つ`img`要素は存在しています。しかし、JavaScriptコードが実行されるタイミングにおいて、DOMがまだ完全に構築されていない可能性があります。これが原因で`document.getElementById('bigimg')`がnullを返している可能性があります。

以下の修正案を試してみてください。`DOMContentLoaded` イベントを使用して、DOMの読み込みが完了した後にJavaScriptコードが実行されるようにしています。

```javascript
document.addEventListener('DOMContentLoaded', function () {
    var thumbs = document.querySelectorAll('.thumb');
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
            document.querySelector('#bigimg img').src = '../Chapter5/5-04_image/' + this.dataset.image;
        };
    }
});
```

この修正では、`DOMContentLoaded` イベントを待つようにし、`document.querySelector('#bigimg img').src`を使用して`bigimg`要素内の`img`要素の`src`属性を変更しています。これにより、DOMの読み込みが完了してからJavaScriptが実行され、エラーが解消される可能性があります。

もしまだエラーが解消されない場合は、ブラウザのコンソールで他のエラーメッセージが表示されていないか確認してみてください。それによって、さらなるデバッグが可能です。

### それでも出てきたエラー
```
ch5imagescript.js:5 Uncaught TypeError: Cannot set properties of null (setting 'src')
    at thum
```
### 次の提案内容
エラーメッセージから見て取れるところによれば、エラーは `ch5imagescript.js` ファイルの5行目で発生しているようです。先程のコードの修正によって、`bigimg`要素がクエリセレクタ `#bigimg img` で選択されていると仮定します。

エラーの原因は、`document.querySelector('#bigimg img')` がnullを返しているためです。これは、`#bigimg img`にマッチする要素がDOM内に存在しないか、正しいIDや構造が指定されていない可能性があります。

以下の点を確認してみてください：

1. HTMLコードで `bigimg` というIDが正しく指定されているか確認してください。`<div id="bigimg">` のようになっていることを確認してください。

2. `bigimg`の中には1つの `img` 要素が存在することを確認してください。もし存在しない場合、JavaScriptで `src` を設定しようとしてもエラーが発生します。

3. HTMLファイルとJSファイルが同じディレクトリにある場合、相対パスが適切か再度確認してみてください。

もし問題が解決しない場合は、もう一度修正したJavaScriptのコードと、それを呼び出すHTMLのコードの該当部分を共有していただければ、より具体的な助言ができるかもしれません。
### 俺のタグの変更点
```
<img id="bigimg" src="../Chapter5/5-04_image/img1.jpg" alt="bigimg">
```

### 解決策(動いた)
提供していただいた情報をもとに、エラーが解消できるように修正を試みましょう。まず、以下のようにJavaScriptコードを変更してみてください。

```javascript
document.addEventListener('DOMContentLoaded', function () {
    var thumbs = document.querySelectorAll('.thumb');
    var bigImg = document.getElementById('bigimg');

    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
            bigImg.src = '../Chapter5/5-04_image/' + this.dataset.image;
        };
    }
});
```

変更点は、`document.getElementById('bigimg')` の結果を変数 `bigImg` に格納しておくことです。これにより、毎回 `bigimg` を検索するのではなく、一度検索して結果を再利用できるようになります。

また、エラーが発生した際にコンソールに表示される行数やスタックトレースを確認してみてください。エラーの行数が変更されていれば、それに合わせて修正を行ってください。
### 結論
参考書ではカスタムデータをhtml上で付与してjavascriptファイルでdatasetプロパティからアクセスしていたが、実行したプログラムではdatasetの読み込みがうまくいかずにエラーが出た。
そこで今回はhtmlファイルにidを付与し、javascriptのファイルを変更しidを読めるようにした為実行できた。
という解釈でいいでしょうか
- ChatGPT
- はい、おっしゃる通りです。エラーの原因は、JavaScriptがdocument.getElementById('bigimg')で要素を見つけることができなかったことでした。この問題を解決するために、id をHTML要素に追加し、JavaScriptでそのidを使用して要素を取得する方法を選択したことが正しいアプローチでした。

参考書の例では、カスタムデータ属性を使用していましたが、実際のコードではDOM要素の特定の位置や構造が変更される可能性があり、それに対応する必要があります。今回の変更によって、より確実に要素を取得でき、エラーが解消されたことが確認されました。

この経験を通じて、HTML要素に直接idを付与してJavaScriptからアクセスすることで、シンプルで確実な方法で問題を解決できることを学びましたね。お疲れ様でした。質問があればいつでもどうぞ。

## カスタムデータについて
`data-*` 属性は、HTML要素にカスタムデータを格納するための方法です。`data-image` のような属性は、その要素に関連するカスタムデータを提供するために使用されます。JavaScriptやCSSからこれらのデータにアクセスすることができます。

例えば、以下のようなHTMLがあるとしましょう：

```html
<div id="myElement" data-image="example.jpg">This is a custom element with data.</div>
```

この例では、`data-image` 属性に `example.jpg` という値が格納されています。これをJavaScriptで取得するには以下のようにします：

```javascript
var myElement = document.getElementById('myElement');
var imageData = myElement.dataset.image; // "example.jpg"
```

このようにして、`dataset` プロパティを使って `data-*` 属性の値にアクセスできます。JavaScript内でこれらのデータを利用することで、要素に関連する追加の情報を保持できます。

あなたの元の質問に戻ると、`data-image` 属性はクリックされたサムネイルに関連する大きな画像のファイル名を格納しています。JavaScriptはこの属性の値を取得し、それに基づいて大きな画像を表示していると考えられます。

カスタムデータ（Custom Data）は、HTML要素にユーザーが定義したデータを関連付けるための手段です。このデータは通常、`data-*` 属性を使用して要素に埋め込まれます。これにより、JavaScriptやCSSなどのコードから、その要素に関する追加情報を利用できるようになります。

例えば、以下のようなHTMLがあります：

```html
<div data-id="123" data-category="fruit" data-price="2.50">Apple</div>
```

この例では、`data-id`、`data-category`、`data-price` の3つのカスタムデータ属性があります。これらはそれぞれ、この `<div>` 要素に関連するアプリケーションやスクリプトにとって有用な情報を含んでいます。この情報はJavaScriptで以下のように取得できます：

```javascript
var element = document.querySelector('div');
var id = element.dataset.id; // "123"
var category = element.dataset.category; // "fruit"
var price = element.dataset.price; // "2.50"
```

これにより、JavaScriptはHTMLから取得したデータを利用して、動的にコンテンツを生成するなどの操作を行うことができます。

カスタムデータの使用は、HTML要素に追加の情報を埋め込む必要があり、これによってコードがより柔軟で拡張可能になります。特に動的なウェブページやアプリケーションの開発では、このようなアプローチが有用です。

なお`data-*`の`*`には任意の文字列が入り、ユーザーが自由に定義できるカスタムデータ属性である。この`*`には何でも指定できる。

つまり前述していた`data-image="example.jpg"`もファイル名を指しているのではなく、単なる文字列の値である。

## datasetプロパティについて
`dataset` プロパティは、HTML要素の `data-*` 属性にアクセスするためのJavaScriptのプロパティです。このプロパティは、要素が持つ全ての `data-*` 属性をオブジェクトとして提供します。このオブジェクトは、各 `data-*` 属性の名前をキーとし、それに対応する値を格納しています。

以下に、`dataset` プロパティの基本的な使い方と例を示します。

### 基本的な使い方

```html
<div id="myElement" data-name="John" data-age="25" data-city="New York">User Info</div>
```

```javascript
var element = document.getElementById('myElement');

// datasetプロパティを使用してdata-*属性にアクセス
var name = element.dataset.name; // "John"
var age = element.dataset.age;   // "25"
var city = element.dataset.city; // "New York"
```

### 注意事項

- `data-*` 属性の名前がキャメルケースに変換されます。例えば、`data-first-name` は `dataset.firstName` としてアクセスされます。
- `dataset` プロパティは文字列として値を返します。必要に応じて、数値や他の型に変換する必要があります。

```html
<div id="myElement" data-count="42">Count</div>
```

```javascript
var element = document.getElementById('myElement');

// datasetプロパティは文字列として値を返す
var countString = element.dataset.count; // "42"

// 数値に変換する例
var count = parseInt(element.dataset.count, 10); // 42 (数値として変換)
```

`dataset` プロパティは、HTML要素が持つ `data-*` 属性の取得や設定に非常に便利な方法を提供しています。