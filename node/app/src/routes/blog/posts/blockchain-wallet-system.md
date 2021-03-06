---
title: ウォレットの仕組み【ブロックチェーン】
date: 2019-06-26T07:00+09:00
---

暗号通貨ウォレットをネットで調べてみると、モバイルウォレット、ハードウォレットやペーパーウォレットとかの大体の雰囲気や使い方は分かるのですが、一体何をウォレットに入れているのか等気になることが多かったので、本とかで調べて自分なりにまとめてみました。

![](images/blockchain-wallet-system/20190526175244.png)

## ウォレットとは

先に結論をいうとウォレットは秘密鍵の容器です。

<!-- 以下の記事にも関連することを書いているのでこちらも参考にして頂ければと思います。

[https://udonta.hatenablog.com/entry/blockchain-mechanism:embed:cite] -->

鍵の生成方法とウォレットの構造にはいくつか種類があるのですが、階層的決定性ウォレットというものがあり、これはツリー構造をなしていて、1つのシードと呼ばれるランダムに生成される数値から親鍵、子鍵群、孫鍵群を生成するといった形で、生成の連鎖が無限に続くという風になっています。

モバイルウォレットなどでは複数の英単語をバックアップとして保管するように求められると思いますが、これはシードから求められるもので、これを保管しておくことで、携帯を変えた場合などでも、全ての鍵を復活させ再生成するのに使用できます。

逆に言うと、秘密鍵とかをどれだけ厳重に扱っていても、このシードが漏洩してしまうと、全ての秘密鍵が作成可能になってしまうので、注意が必要です。

階層的決定性ウォレットの鍵の生成方法はchain codeやインデックスが出てきて複雑なんで今回は省略しますが、秘密鍵を使うことなく親公開鍵から子公開鍵を作り出せるという有用な特徴を持っています。

これにより、秘密鍵を全く持たないサーバやアプリケーション上で、非常に安全に公開鍵のみをいくらでも生成することができます。

これらの公開鍵に対応したアドレスに送られた暗号通貨を用いるには、安全なところに保管している秘密鍵からそれに対応する秘密鍵を作り、トランザクションに署名すればOKです。

秘密鍵をより安全に保管するために、パスコードという長いパスワードを使って暗号化秘密鍵の状態にする仕組みも採用されているみたいで、これにより秘密鍵を紙にバックアップするときなどでより安全に保管できます。

少しウォレットからは離れますが、人間が読むことができるメッセージを含んだ文字列指定のあるアドレス（vanity address）という発想があり、アドレスのある位置に欲しい単語が出てくるまで、何回も秘密鍵、公開鍵、アドレスを作る面白い試みもあるみたいです。

## ウォレットの種類

次にウォレットの種類は調べたらたくさん出てくると思うのですが、ここでは秘密鍵がどのように保管されているのか考えてみます。（ウォレットを提供しているサービスによって異なる部分は多いかもしれません）

1. webウォレット

秘密鍵はサービスを提供するパソコン（サーバ）に保管されていて、個人とはサービスにログインするときとかのID、パスワードと紐づけられている。

2. モバイルウォレット

秘密鍵は携帯端末（アプリ）に保管されていて、アプリにログインすれば使える。

3. デスクトップウォレット

秘密鍵はパソコン内（ソフト）に保管されて、ソフトにログインすれば使える。また、パソコンはある程度容量があり、ソフトによってはフルノードとして機能するようにもできる。

4. ハードウェアウォレット

秘密鍵はハードウェア上に保管されていて、対応したソフトにログインし、ハードウェアとパソコンを接続し、またパスワードを入力すると使える。

5. ペーパーウォレット

秘密鍵はオフラインで作成され、それを紙に写して（手書き、プリンタ）保管する。パスワードを設定することで、紙に記載される秘密鍵は暗号化される。

間違っていることもあるかもしれませんが、大体はこんな感じで、安全に管理するための参考になれば幸いです。

<!-- ウォレットと密接に結びついている鍵については以下の記事で説明しています。

[https://udonta.hatenablog.com/entry/secret-key-public-key-address-transaction:embed:cite] -->
