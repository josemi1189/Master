import { describe, expect, it } from "vitest";
import * as apiModel from "./api/house.model";
import { House, createEmptyHouseDetailToVM } from "./house.vm";
import { mapHouseDetailToVm } from "./house-detail.mapped";

describe("mapHouseDetailToVm", () => {
  const mockHouseData: apiModel.House = {
    id: "1",
    name: "Casa rural Málaga",
    description:
      "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baños, piscina...",
    address: "Calle Camino Cupiana",
    city: "Málaga",
    country: "España",
    bedrooms: 5,
    beds: 8,
    bathrooms: 2,
    price: 150,
    image: "/images/casa-malaga.jpg",
    amenities: ["Piscina", "WiFi", "Jardín", "Parking", "Cocina equipada"],
    reviews: [
      {
        id: "r1",
        author: "Ana",
        date: "2021-08-12",
        comment: "La casa es fantástica. 100% recomendado.",
        rating: 5,
      },
      {
        id: "r2",
        author: "Miguel",
        date: "2021-03-22",
        comment:
          "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendado",
        rating: 5,
      },
    ],
  };

  it("should return house details to view model", () => {
    const result = mapHouseDetailToVm(mockHouseData);

    const resultExpected: House = {
      id: "1",
      name: "Casa rural Málaga",
      description:
        "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baños, piscina...",
      address: "Calle Camino Cupiana",
      city: "Málaga",
      country: "España",
      bedrooms: 5,
      beds: 8,
      bathrooms: 2,
      price: 150,
      image: "/images/casa-malaga.jpg",
      amenities: ["Piscina", "WiFi", "Jardín", "Parking", "Cocina equipada"],
      reviews: [
        {
          id: "r1",
          author: "Ana",
          date: "2021-08-12",
          comment: "La casa es fantástica. 100% recomendado.",
          rating: 5,
        },
        {
          id: "r2",
          author: "Miguel",
          date: "2021-03-22",
          comment:
            "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendado",
          rating: 5,
        },
      ],
    };

    expect(result).toEqual(resultExpected);
  });

  it("should return empty data when fill a null value", () => {
    const result = mapHouseDetailToVm(null as unknown as House);

    const resultExpected: House = createEmptyHouseDetailToVM();

    expect(result).toEqual(resultExpected);
  });

  it("should return empty data when fill a undefined value", () => {
    const result = mapHouseDetailToVm(undefined as unknown as House);

    const resultExpected: House = createEmptyHouseDetailToVM();

    expect(result).toEqual(resultExpected);
  });
});
