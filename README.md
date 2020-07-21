# PalpiteBox - Semana Fullstack Master :rocket:


Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com). Uma versão online deste projeto pode ser encontrada em: https://palpite-box.phprograming.vercel.app/.

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

``` JavaScript
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL= CLIENT EMAIL do SERVICE CREDENTIAL
SHEET_PRIVATE_KEY=private KEY do SERVICE CREDENTIAL, lembrar de substituir \n por quebras de linha e de codificar em BASE64
SHEET_DOC_ID= ID DA PLANILHA
```

## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Tulio Faria** - [LinkedIn](https://www.linkedin.com/in/tuliofaria/)

## Reproduzido por:

* **Paulo Henrique B. Santos** - [LinkedIn](https://www.linkedin.com/in/paulo-henrique-barbosa/)

## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com).
