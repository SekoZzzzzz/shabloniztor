const Handlebars = require('handlebars');

// Пример данных о проектах
const projectDetails = [
    { name: 'Проект 1', description: 'Описание проекта 1' },
    { name: 'Проект 2', description: 'Описание проекта 2' },
    { name: 'Проект 3', description: 'Описание проекта 3' }
];

// Компиляция шаблона Handlebars
const source = `
<table width="80%" border="0" cellspacing="0" cellpadding="0" class="full-wrap">
    {{#each projectDetails}}
    <tr bgcolor="#141414" width="100%">
        <td>
            <table align="center">
                <td align="center">
                    <span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 32px; color: #FD841C; text-align: center;">
                        <b>{{name}}</b>
                    </span>
                    <div style="font-size: 16px;">&nbsp;</div>
                </td>
                <tr>
                    <div style="height: 70px; font-size: 40px;">&nbsp;</div>
                    <td align="center">
                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="60%" style="text-align: center;">
                            <tr>
                                <td>
                                    <span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 24px; color: #ffffff; text-align: center;">
                                        {{description}}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <td align="center">
                    <div style="font-size: 32px;">&nbsp;</div>
                    <a href="#" style="text-decoration: none;"><img src="./img/Button.png" alt=""></a>
                </td>
            </table>
        </td>
    </tr>
    {{/each}}
</table>
`;

const template = Handlebars.compile(source);

// Подставляем данные в шаблон и генерируем HTML
const html = template({ projectDetails });

console.log(html);
