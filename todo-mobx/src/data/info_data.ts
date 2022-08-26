export enum FieldName {
  typeOfOrg = 'typeOfOrg',
  bin_iin = "bin_iin",
  nameOfOrg = "nameOfOrg",
  first_name = "first_name",
  last_name = "last_name",
  middle_name = "middle_name",
  email = "email",
  phone = "phone",
  status = "status",
  main_status = "main_status",
  region = "region",
  location = "location",
  legal_address= "legal_address",
  bank = "bank",
  bik = "bik",
  iik = "iik",
  kbe = "kbe"
}
export enum MaskFormat {
    phone = "9 (999)999-99-99",
    bin_iin = "9999 9999 9999",
    bik = "999 999 999",
    email = "L@L.L"
}
type LabelProps = {
  value?: string;
  name?: string;
}
export type InfoType = {
  title: string,
  data: {
    title: string,
    label: LabelProps[] | string,
    mode: boolean,
    type?: 'mask' | 'radio',
    mask?: MaskFormat,
    name: FieldName
  }[]
}[]
export const Info: InfoType = [
  {
    title: "Данные об организации",
    
    data: [
      {
        title: "Организационно-правовая форма",
        label: [
          { value: 'ao',
            name: "АО"
          }, 
          { value: 'too',
            name: "ТОО"
          },
          { value: 'ip',
            name: "ИП"
          },
        ],
        mode: true,
        type: "radio",
        name: FieldName.typeOfOrg,
      },
      {
        title: "БИН /ИИН",
        label: "0123 4567 8910",
        mode: true,
        type: "mask",
        mask: MaskFormat.bin_iin,
        name: FieldName.bin_iin
      },
      {
        title: "Полное наименование",
        label: "Завод номер 1",
        mode: true,
        name: FieldName.nameOfOrg
      }
    ]
  },
  {
    title: "Данные представителя",
    
    data: [
      {
        title: "Фамилия",
        label: "Санжар",
        mode: true,
        name: FieldName.first_name
      },
      {
        title: "Имя",
        label: "Мади",
        mode: true,
        name: FieldName.last_name
      },
      {
        title: "Отчество",
        label: "",
        mode: false,
        name: FieldName.middle_name
      },
      {
        title: "Электронная почта",
        label: "sanzhar.madi@gmail.com",
        mode: true,
        mask: MaskFormat.email,
        name: FieldName.email
      },
      {
        title: "Телефон",
        label: "8 (777)777-77-77",
        mode: true,
        type: "mask",
        mask: MaskFormat.phone,
        name: FieldName.phone
      },
      {
        title: "Должность",
        label: "",
        mode: true,
        name: FieldName.status
      },
      {
        title: "Основание полномочий",
        label: "",
        mode: false,
        name: FieldName.main_status
      },
    ]
    
  },
  {
    title: "Адрес",
    
    data: [
      {
        title: "Регион",
        label: "",
        mode: true,
        name: FieldName.region
      },
      {
        title: "Населенный пункт / Район",
        label: "",
        mode: true,
        name: FieldName.location
      },
      {
        title: "Юридический адрес",
        label: "",
        mode: false,
        name: FieldName.legal_address
      },
    ]
  },
  {
    title: "Банк",
    
    data: [
      {
        title: "Банк",
        label: "Напр. Halyk Bank",
        mode: true,
        name: FieldName.bank
      },
      {
        title: "БИК",
        label: "044 525 225",
        mode: true,
        type: "mask",
        mask: MaskFormat.bik,
        name: FieldName.bik
      },
      {
        title: "ИИК",
        label: "",
        mode: true,
        name: FieldName.iik
      },
      {
        title: "Кбе",
        label: "",
        mode: true,
        name: FieldName.kbe
      },
    ]
  },
]