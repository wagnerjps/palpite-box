# PalpiteBox - Semana Fullstack Master

Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com). Uma versão online deste projeto pode ser encontrada em: https://palpite-box.tuliofaria.dev/.

![Preview](https://github.com/wagnerjps/palpite-box/blob/master/print_palpite-box.png?raw=true)

## Início



### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/iRfPJnVPfRcAIsz4GYHwDo/palpite-box?node-id=0%3A1).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - alteração de base para 64 e inclusão de uma função de conversão devido aos \n
SHEET_DOC_ID=id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Wagner Silva** - [LinkedIn](https://www.linkedin.com/in/wagnerjps/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com).

## Agradecimentos especiais
Queria agradecer a equipe da [DevPleno](https://devpleno.com) e em especial ao professor [Túlio Faria](https://tuliofaria.dev/) pela decicação e qualidade na sua forma de ensinar. Obrigado!
