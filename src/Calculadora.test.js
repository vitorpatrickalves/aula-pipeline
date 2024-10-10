const Calculadora = require("./Calculadora");

describe("Calculadora", () => {
  it("Criar nova calculadora", () => {
    const calculadora = new Calculadora();
    expect(calculadora).toBeDefined();
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe("number");
    expect(calculadora.resultado).toBe(0);
  });

  it("obtém resultado", () => {
    const calculadora = new Calculadora();
    // já validamos o teste abaixo em "Criar nova calculadora"
    // expect(calculadora).toBeDefined(); 
    expect(calculadora.resultado).toBeDefined();
    expect(typeof calculadora.resultado).toBe('number');
  })

  it('Atribui um novo valor à calculadora', () => {
    const calculadora = new Calculadora();
    expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
    expect(() => calculadora.resultado = "Texto")
      .toThrow("O argumento deve ser um número válido");
    expect(calculadora.resultado).toBe(0);
    expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
    expect(calculadora.resultado).toBe(5);
  })

  it("Operação soma", () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma).toBeDefined();
    expect(calculadora.soma.length).toBe(1);
    expect(() => calculadora.soma('Texto')).toThrow(TypeError)
    expect(() => calculadora.soma(false)).toThrow(TypeError)
    expect(() => calculadora.soma('Texto')).toThrow("O argumento deve ser um número válido")
    expect(() => calculadora.soma(5)).not.toThrow(TypeError);
    calculadora.resultado = 3;
    calculadora.soma(5);
    expect(calculadora.resultado).toBe(8);
  })

  test("Operação Divisão", () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao).toBeDefined();
    expect(calculadora.divisao.length).toBe(1);
    expect(() => calculadora.divisao("Texto")).toThrow(TypeError);
    expect(() => calculadora.divisao(true)).toThrow("O argumento deve ser um número válido");
    expect(() => calculadora.divisao("5")).not.toThrow(TypeError);
    expect(()=> calculadora.divisao(0)).toThrow(Error);
    expect(()=> calculadora.divisao(0)).toThrow("Divisão ilegal por zero");
    calculadora.resultado = 15;
    calculadora.divisao(3);
    expect(calculadora.resultado).toBe(5);    
  })
});