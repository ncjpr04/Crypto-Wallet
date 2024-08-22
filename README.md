# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
wallet
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 04
│  │  │  ├─ b82a05e216c60f339c5a2a9c4558304d246e72
│  │  │  └─ f2459b05dbb3d892bdb836707e8d52d09b2965
│  │  ├─ 05
│  │  │  └─ d22e2b81cb5d90b6bbb1f6102ee5974a55ad52
│  │  ├─ 07
│  │  │  └─ ecf7d71bfcf6a7931572ea244fa4a13768b149
│  │  ├─ 08
│  │  │  └─ ce053e3635b3ea5402ffaf06e802676c11d822
│  │  ├─ 09
│  │  │  └─ 8414dffa2430f98b77e709bf7ea407ad681f9f
│  │  ├─ 0a
│  │  │  └─ 12afd36026fd4b20eca4bf2fe0ae63eabd3f31
│  │  ├─ 0b
│  │  │  └─ bf158e46af2b5d2f7f69eb58771ceeb3ecd936
│  │  ├─ 0c
│  │  │  └─ 6f315d33dc8b469e1a74cf5160764801b25005
│  │  ├─ 0d
│  │  │  └─ fbd3e0d8e8d32c947cfd1c40541dc7390a464e
│  │  ├─ 0f
│  │  │  └─ 25d088716fe03d7cbade8678d977b3b771e105
│  │  ├─ 11
│  │  │  └─ ca7e9861babd79349e09f56dccb5b4b59325d0
│  │  ├─ 13
│  │  │  └─ c3090a29ac380fef524ec1544886845f93a28c
│  │  ├─ 15
│  │  │  └─ e687d7bdd0abed74d021fb24988f0d84adfb31
│  │  ├─ 16
│  │  │  └─ 818f421d5b96509fd841af1030a2c598d96d3e
│  │  ├─ 17
│  │  │  └─ fff4dd78a39d5660e25dba8e91a889564419b9
│  │  ├─ 18
│  │  │  └─ 849dd548ee37f144e4402f01d16931a4f6285f
│  │  ├─ 19
│  │  │  └─ 5cf075aff8d992ecc0a58af6877304de7ba2a1
│  │  ├─ 1a
│  │  │  └─ c0566fa1b1ab8b2cade74c0b828876ba2b17d1
│  │  ├─ 1f
│  │  │  └─ 599fd8656feed61e6dd78f9c461ec00cf56ec8
│  │  ├─ 21
│  │  │  ├─ 5b3b62f70190faf24da9c3080dbee39a5c6bde
│  │  │  └─ 6e62ce9af50f13e35723aeb47a2f66a9e95fa4
│  │  ├─ 23
│  │  │  └─ 8d2e4e6436b353404369d9a59fda5f1f980657
│  │  ├─ 24
│  │  │  └─ 7d0d67432316c276c15b5c3b2f50db41476103
│  │  ├─ 27
│  │  │  ├─ 005c5f1310066c7f6931a75ae229d0405b8074
│  │  │  └─ ae563ee9277bc9623a79e7cf18612307506e03
│  │  ├─ 28
│  │  │  └─ c19aa005ca0f91951bef90caa0ad4331d0c7cd
│  │  ├─ 29
│  │  │  └─ f525c53525bbd920c5b9421f842dedde9557d4
│  │  ├─ 2b
│  │  │  └─ 95d288358685334df3378b0f8693edcf814d2f
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 2f
│  │  │  └─ afceacc11561293aa1f7aa3f36ee2039267d81
│  │  ├─ 30
│  │  │  ├─ 00d0b438573ad756240920f3a6b21c42604d19
│  │  │  └─ 3657c54fb6a58f6fff2d9766f4c00c0b547fa8
│  │  ├─ 31
│  │  │  ├─ 908e47cdc40479ba86471f9bff97f94f7115f4
│  │  │  └─ a731715ac272ace1c47a9b915501ce84984bf6
│  │  ├─ 33
│  │  │  └─ 4fc51831225dc8f7386c62b54e12bb95de658d
│  │  ├─ 40
│  │  │  └─ e8901ee9155b548dee1171941117956dacf8e8
│  │  ├─ 43
│  │  │  └─ 2b800d4530c18b8a2d510758723d1f768c0224
│  │  ├─ 46
│  │  │  ├─ 62ead7ca6050046b306e945348225fab5c50f2
│  │  │  └─ dcbe5656000d4d25b0ac1542b65adbbbe17b04
│  │  ├─ 47
│  │  │  └─ 9e1365b002ebb158167e23a22e050af15ce34a
│  │  ├─ 48
│  │  │  └─ ef4a411cd17b0ca26d7cba9057ae53e9f14cbb
│  │  ├─ 4a
│  │  │  └─ c6d9cb3d423ebbfe6514c2a02688cdf83ee9b9
│  │  ├─ 4b
│  │  │  └─ e043ddf6a769bf731bbeecac6abd38c9fda046
│  │  ├─ 50
│  │  │  ├─ 52d44efbd9f777f24329be9219ed6f927e4404
│  │  │  └─ a62dd4659f27e51868bc1df0fccaef392b2ee7
│  │  ├─ 51
│  │  │  └─ 156724540cdfca0d6f76892f721569b0f21394
│  │  ├─ 52
│  │  │  ├─ c47450741ec82da121dcaeee880cdc87bac881
│  │  │  └─ e1cd91bb88858010f4ffb8a5db5ae4f787be4b
│  │  ├─ 55
│  │  │  ├─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  │  └─ f47b48d89bdcc068310b9f71fc9eca63ebf8bd
│  │  ├─ 57
│  │  │  ├─ 2afda1bdcec30a833fba324500d6da6c2668c3
│  │  │  └─ 7d1921353da3dac90cbc72de0b3b2a5f3e14d1
│  │  ├─ 58
│  │  │  └─ 5017ba4e8294b2d85a8c0174b8cfa738fe5e12
│  │  ├─ 5e
│  │  │  └─ 9e0aa3a8ebb16fe47eaff48109ff9200e0e6fe
│  │  ├─ 5f
│  │  │  └─ a409f5366ff8dc6445cf9c5321fd329d367fef
│  │  ├─ 65
│  │  │  └─ 02287ee1e94eacdf158d881a55f2511a2e7fd9
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6f
│  │  │  ├─ 07bea30046e21f76f8a8f0ceacaba6f1858289
│  │  │  ├─ 0a7a0ab358739fe06004db8ca5542885449b4d
│  │  │  ├─ 66516272d0fd7e195989a7f06c44763e679212
│  │  │  └─ a4d1b4b88ee0b23747e78e7f91e3fd85374163
│  │  ├─ 74
│  │  │  └─ 8d88c79728c60a0131fa50dd34dba5e042699b
│  │  ├─ 76
│  │  │  └─ ef43ff89650b79cf262d7d262262f4e02bdc5f
│  │  ├─ 77
│  │  │  └─ 7ad44ffd7a856824498074b75a98aabf9a01fb
│  │  ├─ 7a
│  │  │  └─ 500f1e3f8834ab7c5133be9e2646f3be5370e8
│  │  ├─ 7f
│  │  │  └─ 0d498ee870549d78a3fa050b174cb3b290d1d8
│  │  ├─ 80
│  │  │  └─ e7885079e60fbefdd6e3ced006d2f04c0847a4
│  │  ├─ 81
│  │  │  └─ 98b6a5a9292c55676ca8abeb6c446c77eca670
│  │  ├─ 83
│  │  │  └─ e5f564f83fe436be0cc622acfcfd6e6392c883
│  │  ├─ 85
│  │  │  └─ 2b86c33fe65647bf62c6d0a8b36af84532c0cf
│  │  ├─ 89
│  │  │  └─ f91e54dc6f03e3953a071b1e217e6ed9dd4f0a
│  │  ├─ 8c
│  │  │  └─ e82c39d17b66c965fee78da454c0e9589c0294
│  │  ├─ 8e
│  │  │  ├─ 92a08e0ec6ceb8436d9504f47f133cf79d8dec
│  │  │  └─ af6c164b2ad6e287978a77681a875e0ed0d4f6
│  │  ├─ 90
│  │  │  └─ b7e968a51a85a0380ba194d40ae12c81dad5db
│  │  ├─ 94
│  │  │  ├─ 70b0cd9c98dc65768b7e393979931a6c07df92
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 9a
│  │  │  └─ 9c9515bf061b44cbeeb85afbd38a4f5d88aad8
│  │  ├─ 9b
│  │  │  ├─ 004258af4e404b3e758ec25376551061656689
│  │  │  └─ e2fb19f6ffda32414a4874d975eef1f2200098
│  │  ├─ 9d
│  │  │  └─ 9b9547412b753651947bbeed8d651f4749b05d
│  │  ├─ a0
│  │  │  └─ 3261837a3d0778b3d5231ff1c2d91c34c77999
│  │  ├─ a3
│  │  │  ├─ 692c7f529fd8f0f371f01eb411cfb857a62578
│  │  │  └─ f849d1be2138c9ab1e0744d81ab4d3ba11b952
│  │  ├─ a4
│  │  │  └─ 3a29940a8a29a0e73417ed2f567e4c078a89e7
│  │  ├─ a5
│  │  │  ├─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  │  └─ 71c1fc8c8432923c8692e295d24b2ef362bcb8
│  │  ├─ ad
│  │  │  ├─ 6e1da76d1170b04801da664299d3437673b1ec
│  │  │  └─ f2105f1777d102ac441350c03515ba8c37e8b5
│  │  ├─ ae
│  │  │  └─ 4088fd6bee579666ef1dc027fb5ce094c88dcb
│  │  ├─ af
│  │  │  └─ a13ecfa3bd0f4a553a510b856c5800382e139b
│  │  ├─ b3
│  │  │  └─ 27bf328a934f5aba12d3320a058f1a4bf8d2c0
│  │  ├─ b7
│  │  │  └─ ac9bb38fa7041e6d3a86ae6f25dde4f89354ed
│  │  ├─ b8
│  │  │  └─ 84180257ea077680efb007bd63ef68583fec4a
│  │  ├─ ba
│  │  │  └─ c86d9bacc05055dd46ed9019102773ca8958e7
│  │  ├─ bc
│  │  │  └─ 99a89fe2a22aaa16eb5bbdf759726b8b6e7b00
│  │  ├─ bd
│  │  │  └─ 7e618acaeb5ffb418c805a7a97f6a6248b4321
│  │  ├─ be
│  │  │  └─ 86f634087b239a1f86f1042219525702b3955f
│  │  ├─ c3
│  │  │  └─ 6f21710735d61bea77894c31b28d785b34c0cf
│  │  ├─ c7
│  │  │  └─ 7a660f2de93dab96e82226770f015095a7dd2d
│  │  ├─ c8
│  │  │  └─ a7977f9f30b5e4911f3873e7d44d65dcce8f34
│  │  ├─ ca
│  │  │  └─ f344218685f2a428dd61c0fc3005a83a2089bf
│  │  ├─ ce
│  │  │  ├─ 016f4a619903c5135cb8862c5467d8c17344a7
│  │  │  └─ 7b4ec7122a493292ec8b2cdf76bb78ed21fdeb
│  │  ├─ cf
│  │  │  └─ 39ba26f1d81dd0665878f62f55f65c2f329331
│  │  ├─ d0
│  │  │  ├─ 7dd7f3df4c7e31fa15c9d898c95de86a3dd3bd
│  │  │  └─ 84ccade0d8b5bd77fd5174993bcef7b57644c9
│  │  ├─ d6
│  │  │  └─ a445bfa8565a0c33ed4311654428228f0e57ed
│  │  ├─ d7
│  │  │  └─ 54f12265cbccaa48674fdea3f3a369ab75ccf4
│  │  ├─ dd
│  │  │  └─ de2b7b4cd2eabbc0ceb90e0452e5b63aa00f83
│  │  ├─ de
│  │  │  └─ 4c7417268d14d275bf48a80e536e656da05e15
│  │  ├─ df
│  │  │  └─ 1370dbcd31f2da52e970ae46890386ddfcd886
│  │  ├─ e0
│  │  │  ├─ 4c7deafbeda126cc143f474dc8a8c6fe76f416
│  │  │  └─ d874a05edbbaf043b9ba1ede20b3fbfb9d88cf
│  │  ├─ e2
│  │  │  └─ 224002c4a07a82d6e989c532dbadcd89803abb
│  │  ├─ e3
│  │  │  └─ 9be570ef6b69e8ca354e5168998b535de619c6
│  │  ├─ e7
│  │  │  ├─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  │  └─ d6c65425c391679e9ece03b6009b619bef645c
│  │  ├─ ed
│  │  │  ├─ 07f958517f9b1b72563e0c49298fa40f956aa9
│  │  │  └─ bf18ffbf100718fa3ba410de46f3e4b44a1fea
│  │  ├─ ee
│  │  │  └─ 86f54eee9d661c7ab0bc27ba6827ebcc9fd451
│  │  ├─ f5
│  │  │  └─ 695a2ca8236972365feda436f8fca44b678e9b
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ fa
│  │  │  ├─ 6c93ed1a479f2b9faad6788bc908dc13f237a8
│  │  │  └─ f0563ac2d2cb2e4240f8afcf7bd582e208f363
│  │  ├─ fc
│  │  │  └─ 18d9d11f935ecf221893e93775d434d7054489
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ Backend
│  └─ GenerateWallet.js
├─ build
│  ├─ assets
│  │  ├─ index-Beg1VrGZ.js
│  │  └─ index-VVmF819b.css
│  ├─ index.html
│  └─ vite.svg
├─ eslint.config.js
├─ index.html
├─ lib
│  └─ utils.ts
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Home.jsx
│  │  ├─ Socials.jsx
│  │  ├─ text
│  │  └─ ui
│  │     ├─ alert-dialog.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     └─ input.tsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```