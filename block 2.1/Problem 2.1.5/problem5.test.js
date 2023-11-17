import { getLanguagesStatistic } from "./problem5";

describe("languages statistic", () => {
  const data = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
      year: 2019,
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
      year: 2019,
    },
    {
      firstName: "Piter",
      lastName: "G.",
      country: "Sweden",
      continent: "Europe",
      age: 30,
      language: "JavaScript",
      year: 2019,
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
      year: 2014,
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
      year: 2016,
    },
  ];

  test("должна считать только актуальные отзывы", () => {
    const result = getLanguagesStatistic(data);
    const languages = Object.keys(result);
    expect(languages.length).toBe(2);
    expect(result).toHaveProperty("C");
    expect(result).toHaveProperty("JavaScript");
    expect(result).not.toHaveProperty("Ruby");
  });

  test("должна правильно подсчитывать языки", () => {
    const result = getLanguagesStatistic(data);
    expect(result["C"]).toBe(1);
    expect(result["JavaScript"]).toBe(2);
  });

  test("должна возвращать пустой объект, если нет актуальных отзывов", () => {
    const noReviews = data.map((review) => ({ ...review, year: 2018 }));
    const result = getLanguagesStatistic(noReviews);
    expect(result).toEqual({});
  });

  test("должна корректно обрабатывать пустой массив", () => {
    const result = getLanguagesStatistic([]);
    expect(result).toEqual({});
  });

  test("должна игнорировать отзывы без указания языка", () => {
    const invalidData = [
      ...data,
      {
        firstName: "Test",
        lastName: "User",
        country: "Testland",
        continent: "Test",
        age: 99,
        year: 2019,
      },
    ];
    const result = getLanguagesStatistic(invalidData);
    expect(result["C"]).toBe(1);
    expect(result["JavaScript"]).toBe(2);
    expect(result).not.toHaveProperty("");
  });
});
