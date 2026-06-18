import { getCountries } from "@/app/_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const selectedCountry = countries.find(
    (country) => country.name.toLowerCase() === defaultCountry?.toLowerCase(),
  );
  const defaultValue = selectedCountry
    ? `${selectedCountry.name}%${selectedCountry.flag}`
    : "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={defaultValue}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((country) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
