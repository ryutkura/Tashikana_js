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
```<img id="bigimg" src="../Chapter5/5-04_image/img1.jpg" alt="bigimg">
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