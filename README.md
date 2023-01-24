# テストダブルについて
ミサイル発射システムを作成する例で説明します

## ミサイル発射システムの仕様
（発射仕様が気になるかもしれませんが、test doubles を説明するためのものです）

①発射ボタンを押したら、ミサイルを発射装置にセット出来るかどうか確認したい  
②発射ボタンを押したら、発射可能なミサイルの場合、発射できたことを確認したい  
③発射ボタンを押したら、発射不可能なミサイルの場合、発射できなかったことを確認したい  
④発射ボタンを押したら、fireメソッド(ミサイル発射の関数) が呼ばれているか  
⑤発射ボタンを押したら、正しいpasswordが設定されている場合、ミサイルを発射する  
⑥発射ボタンを押したら、正しくないpasswordが設定されている場合、自爆してしまう  
⑦発射ボタンを押したら、正しいpasswordが設定されており、天気APIの結果が雨以外ならミサイルを発射する  

## 開発方法
上記のミサイル発射に関するシステムを開発するためには、開発過程で何発も実弾を発射しなければ開発ができない。  
しかし実弾を何発も発射してたらアメリカとかから怒られちゃう。  

そこで test doubles が登場！  
実弾に代わって test doubles を使用することで 実弾を発射しないで各機能をテストできる。  
実際にコードを書きながら test doubles ５つの役割について理解していこう！

※本ワークショップはミサイルの発射を推奨するものではありません。
***

