# Evnts Challenge - Front-end

## Sobre o desafio
O desafio é bem simples, vamos disponibilizar 2 endpoints, um de Eventos e outro de Hotéis, com esses endpoints você deve criar uma aplicação, simples assim.

Não vamos avaliar a sua capacidade como designer, então, não precisa se preocupar em implementar um layout muito elaborado, mas, vamos avaliar as suas noções de UX.

Eu, como usuário, quero.
1.  Escolher um evento;
2.  Ver os hotéis disponíveis e escolher um hotel;
3.  Ver os quartos disponíveis e escolher um quarto;
4.  Solicitar a minha reserva com um form básico (Nome, telefone, email, etc...)

## API
### Listar os Eventos:
Request:

```GET http://eng.evnts.rocks/events```

Body:

```JSON
{
    "id": "1",
    "name": "Hold the door",
    "startDate": "10/01/2010",
    "endDate": "11/01/2010",
    "location": "Beyond the Wall",
    "image": "https://unsplash.it/700",
    "description": "Vilibazmosa iderenni emilun. Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon. Sikudi nopazmi! Toli rhuqo lotinti, kostilus. Skorī demalyti tymptir tymis, erinis ia morghulis."
  }
  ```

### Listar os Hotéis:
Request:

```GET http://eng.evnts.rocks/hotels```

Body:

```JSON
 {
    "id": "1",
    "name": "Wall Deluxe Hotel",
    "location": "Vilibazmosa iderenni emilun, WF",
    "image": "https://unsplash.it/451",
    "stars": "3",
    "distanceToEvent": "1,2 Km",
    "description": "Vilibazmosa iderenni emilun. Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon. Sikudi nopazmi! Toli rhuqo lotinti, kostilus. Skorī demalyti tymptir tymis, erinis ia morghulis.",
    "amenities": [
      "breakfast",
      "wi-fi",
      "gym",
      "parking"
    ],
    "rooms": [
      {
        "id": "1111",
        "name": "Standard Single",
        "price": "R$ 300,00",
        "beds": [
          "Single"
        ]
      },
      {
        "id": "1112",
        "name": "Standard Double",
        "price": "R$ 370,00",
        "beds": [
          "Double"
        ]
      }
    ]
  }
  ```

## Requisitos
-   Não é obrigatório o uso de um framework, mas, você pode usar o framework que se sentir confortável (Vue, Angular, React, etc...), aqui nós usamos React.
-   Layout Responsivo.
-   Pode utilizar algum styleguide (Bootstrap, Material Design, etc...).

## Não é obrigatório, mas gostamos...
-   Testes Automatizados;
-   Pré-processadores (SASS, LESS, Stylus);
-   ES6.

##  Vamos avaliar
-   Boas práticas;
-   Organização do projeto;
-   Requisitos solicitados;
-   Manutenibilidade.
