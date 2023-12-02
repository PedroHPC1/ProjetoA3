# BackendA3

-- Criar o banco de dados e as tables (necessário a instalação e utilização do Docker Desktop) --

    1°: Instalar no VSCode as extensões Database Client e Thunder Client

    2°: Abrir o terminal > CD BACKEND > digitar NPM install

    3°: Ainda no terminal digite NPM RUN DEV

    4°: Na extensão Database Client, devemos clicar em Create Connection e definir a PORT como 3306, Username como root e Password como root

    5°: Ainda na extensão Database Client, devemos encontrar o database com o localhost e clicar no botão +, após isso devemos colar o código abaixo na tela de extensão que abriu.

        CREATE DATABASE IF NOT EXISTS PlanejaMente;

        USE PlanejaMente;

        CREATE TABLE tasks (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(45) NOT NULL,
            data VARCHAR(45) NOT NULL,
            categoria VARCHAR(10) NOT NULL,
            concluído VARCHAR(45) NOT NULL
        );

        CREATE TABLE obs (
            id INT PRIMARY KEY AUTO_INCREMENT,
            id_evento INT NOT NULL,
            Foreign Key (id_evento) REFERENCES tasks(id),
            texto VARCHAR(45) NOT NULL
        )
    
    6°: Abra a extensão ThunderClient e crie uma request POST com a URL "http://localhost:4000/tasks" > Vá em Body e em JSON utilize o modelo abaixo para criar algumas tarefas

        {
            "nome": "",
            "data": "",
            "categoria": ""
        }
    
    Posteriormente crie uma outra request com a mesma URL, mas como GET, e rode para obter a lista de tarefas

    Crie mais uma request como DELETE com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja deletar, rode ela e você deletará uma tarefa

    Rode novamente a request GET de tarefas, obtendo novamente a lista de tarefas

    Crie mais uma request como PUT com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja alterar, e logo em seguida abra a aba Body > JSON e utilize o modelo abaixo para alterar a sua tarefa (se lembre que nenhum campo pode ser indefinido ou vázio)

        {
            "nome": "",
            "categoria": "",
            "concluído": "true/false"
         }

    Rode novamente a request GET de tarefas, obtendo novamente a lista de tarefas

    7°: Abra a extensão ThunderClient e crie uma request POST com a URL "http://localhost:4000/obs" > Vá em Body e em JSON utilize o modelo abaixo para criar algumas tarefas (o campo id_evento deve ser preenchido com o ID da tarefa que deseja alocar está observação)

        {
            "id_evento": 1,
            "texto": "Queijo"
        }

    Posteriormente crie uma outra request com a mesma URL, mas como GET, e rode para obter a lista de observações

    Crie mais uma request como DELETE com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja deletar, rode ela e você deletará uma observação

    Rode novamente a request GET de observações, obtendo novamente a lista de observações

    Crie mais uma request como PUT com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da observação que você deseja alterar, e logo em seguida abra a aba Body > JSON e utilize o modelo abaixo para alterar a sua observação (se lembre que nenhum campo pode ser indefinido ou vázio)

        {
            "texto": ""
        }

    Rode novamente a request GET de observações, obtendo novamente a lista de observações