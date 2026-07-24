// Bảng định nghĩa môn học cho các tổ hợp xuất hiện trong database của bạn
const danhMucToHop = {
    "A00": ["Toán", "Vật lý", "Hóa học"],
    "A01": ["Toán", "Vật lý", "Tiếng Anh"],
    "A02": ["Toán", "Vật lý", "Sinh học"],
    "B00": ["Toán", "Hóa học", "Sinh học"],
    "B03": ["Toán", "Sinh học", "Ngữ văn"],
    "B08": ["Toán", "Sinh học", "Tiếng Anh"],
    "C00": ["Ngữ văn", "Lịch sử", "Địa lý"],
    "C01": ["Toán", "Ngữ văn", "Vật lý"],
    "C02": ["Toán", "Ngữ văn", "Hóa học"],
    "C04": ["Toán", "Ngữ văn", "Địa lý"],
    "C07": ["Ngữ văn", "Vật lý", "Lịch sử"],
    "D01": ["Toán", "Ngữ văn", "Tiếng Anh"],
    "D07": ["Toán", "Hóa học", "Tiếng Anh"],
    "D10": ["Toán", "Địa lý", "Tiếng Anh"],
    "D14": ["Ngữ văn", "Lịch sử", "Tiếng Anh"],
    "D15": ["Ngữ văn", "Địa lý", "Tiếng Anh"],
    "X02": ["Toán", "Ngữ văn", "Tin học"],
};

const databaseNganhIUH = [
    {
        maNganh : "7510301",
        tenNganh: "Công nghệ kỹ thuật điện, điện tử",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 25.25,
            dgnl : 25.75
        }
    },

    {
        maNganh : "7510303",
        tenNganh : "Tự động hóa",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 26.50,
            dgnl : 27.0
        }
    },

    {
        maNganh : "7510302",
        tenNganh : "Công nghệ kỹ thuật điện tử - viễn thông",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 24.25,
            dgnl : 24.75
        }
    },
    
    {
        maNganh : "7480108",
        tenNganh : "Kỹ thuật máy tính",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 24.00,
            dgnl : 24.50
        }
    },

    {
        maNganh : "7510201",
        tenNganh : "Công nghệ kỹ thuật cơ khí",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 25.50,
            dgnl : 26.01
        }
    },

    {
        maNganh : "7510203",
        tenNganh : "Công nghệ kỹ thuật cơ điện tử",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 26.05,
            dgnl : 27.00
        }
    },

    {
        maNganh : "7510202",   
        tenNganh : "Công nghệ chế tạo máy",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt :24.50,
            dgnl :25.00
        }
    },

    {
        maNganh : "7510205",
        tenNganh : "Công nghệ kỹ thuật ô tô",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 25.00,
            dgnl : 25.50
        }
    },

    {
        maNganh : "7510206",
        tenNganh : "Công nghệ kỹ thuật nhiệt",
        toHopXetTuyen : ["A00", "A01", "C01"],
        diemChuan2025 : {
            thpt : 22.25,
            dgnl : 22.77
        }
    },

    {
        maNganh : "7480201",
        tenNganh : "Nhóm ngành Công nghệ thông tin",
        toHopXetTuyen : ["A00", "A01", "C01", "D01", "D07", "X02"],
        diemChuan2025 : {
            thpt : 24.50,
            dgnl : 25.00
        }
    },

    {
        maNganh : "7510401",
        tenNganh : "Công nghệ hóa học",
        toHopXetTuyen : ["A00", "D07", "B00", "C02"],
        diemChuan2025 : {
            thpt : 24.00,
            dgnl : 24.50
        }
    },

    {
        maNganh : "7540101",
        tenNganh : "Công nghệ thực phẩm",
        toHopXetTuyen : ["A00", "D07", "B00", "C02"],
        diemChuan2025 : {
            thpt : 21.50,
            dgnl : 22.04
        }
    },

    {
        maNganh : "7420201",
        tenNganh : "Công nghệ sinh học",
        toHopXetTuyen : ["A00", "A02", "B03", "B08"],
        diemChuan2025 : {
            thpt : 22.50,
            dgnl : 23.01
        }
    },

    {
        maNganh : "7340201",
        tenNganh : "Tài chính ngân hàng",
        toHopXetTuyen : ["D01", "C02", "C03", "C03"],
        diemChuan2025 : {
            thpt : 24.00,
            dgnl : 24.50
        }
    },

    {
        maNganh : "7340101",
        tenNganh : "Quản trị kinh doanh",
        toHopXetTuyen : ["D01", "C02", "C03", "C03"],
        diemChuan2025 : {
            thpt : 24.75,
            dgnl : 25.25
        }
    },

    {
        maNganh : "7510605",
        tenNganh : "Logistics và Quản lý chuỗi cung ứng",
        toHopXetTuyen : ["D01", "C02", "C03"],
        diemChuan2025 : {
            thpt : 24.75,
            dgnl : 25.25 
        }
    },

    {
        maNganh : "7340115",
        tenNganh : "Marketing",
        toHopXetTuyen : ["D01", "C02", "C03", "C03"],
        diemChuan2025 : {
            thpt : 26.00,
            dgnl : 26.51
        }
    },

    {
        maNganh : "7340120",
        tenNganh : "Kinh doanh quốc tế",
        toHopXetTuyen : ["A01", "D01","D10"],
        diemChuan2025 : {
            thpt : 25.00,
            dgnl : 25.50
        }
    },

    {
        maNganh : "7340122",
        tenNganh : "Thương mại điện tử",
        toHopXetTuyen : ["A01", "D01","D10"],
        diemChuan2025 : {
            thpt : 26.00,
            dgnl : 26.51
        }
    },

    {
        maNganh : "7220201",
        tenNganh : "Ngôn ngữ Anh",
        toHopXetTuyen : ["D01", "D14", "D15"],
        diemChuan2025 : {
            thpt : 23.25,
            dgnl : 23.74
        }
    },

    {
        maNganh : "7380107",
        tenNganh : "Luật kinh tế",
        toHopXetTuyen : ["A01", "D01", "D14", "C00", "C04", "C07"],
        diemChuan2025 : {
            thpt : 25.25,
            dgnl : 25.75
        }
    },
];
