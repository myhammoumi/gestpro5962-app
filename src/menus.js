
export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [
  {
    "path": "/courses/annexes4_admin",
    "label": "Gestion des Courses",
    "icon": "local_taxi",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": "Accueil",
    "icon": "home",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/courses",
    "label": "Mes Courses",
    "icon": "local_taxi",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/assure",
    "label": "Liste Assurés",
    "icon": "contact_phone",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/tarification",
    "label": "Simulateur de Tarif",
    "icon": "credit_card",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/notes",
    "label": "Mes Notes",
    "icon": "note_add",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/administration",
    "label": "Administration",
    "icon": "settings_applications",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/agenda",
    "label": "Mon Agenda",
    "icon": "access_alarms",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	agendalistheader: [
  {
    "label": "Titre",
    "align": "left",
    "sortable": false,
    "name": "title",
    "field": "title"
  },
  {
    "label": "Saisie Le",
    "align": "left",
    "sortable": false,
    "name": "date_saisie",
    "field": "date_saisie"
  },
  {
    "label": "Lieu Depart",
    "align": "left",
    "sortable": false,
    "name": "lieu_depart",
    "field": "lieu_depart"
  },
  {
    "label": "Date Debut",
    "align": "left",
    "sortable": false,
    "name": "date_debut",
    "field": "date_debut"
  },
  {
    "label": "Heure Debut",
    "align": "left",
    "sortable": false,
    "name": "time_debut",
    "field": "time_debut"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	agendaagendaheader: [
  {
    "label": "Id Rdv",
    "align": "left",
    "sortable": false,
    "name": "id_rdv",
    "field": "id_rdv"
  },
  {
    "label": "User Id",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  },
  {
    "label": "Titre",
    "align": "left",
    "sortable": false,
    "name": "title",
    "field": "title"
  },
  {
    "label": "Saisie Le",
    "align": "left",
    "sortable": false,
    "name": "date_saisie",
    "field": "date_saisie"
  },
  {
    "label": "Lieu Depart",
    "align": "left",
    "sortable": false,
    "name": "lieu_depart",
    "field": "lieu_depart"
  },
  {
    "label": "Cp",
    "align": "left",
    "sortable": false,
    "name": "cp",
    "field": "cp"
  },
  {
    "label": "Ville",
    "align": "left",
    "sortable": false,
    "name": "ville",
    "field": "ville"
  },
  {
    "label": "Remarques",
    "align": "left",
    "sortable": false,
    "name": "remarques",
    "field": "remarques"
  },
  {
    "label": "Date Debut",
    "align": "left",
    "sortable": false,
    "name": "date_debut",
    "field": "date_debut"
  },
  {
    "label": "Date Fin",
    "align": "left",
    "sortable": false,
    "name": "date_fin",
    "field": "date_fin"
  },
  {
    "label": "Heure Debut",
    "align": "left",
    "sortable": false,
    "name": "time_debut",
    "field": "time_debut"
  },
  {
    "label": "Heure Fin",
    "align": "left",
    "sortable": false,
    "name": "time_fin",
    "field": "time_fin"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	assurelistheader: [
  {
    "label": "Nom",
    "align": "left",
    "sortable": false,
    "name": "nom",
    "field": "nom"
  },
  {
    "label": "Prenom",
    "align": "left",
    "sortable": false,
    "name": "prenom",
    "field": "prenom"
  },
  {
    "label": "Cp",
    "align": "left",
    "sortable": false,
    "name": "cp",
    "field": "cp"
  },
  {
    "label": "Ville",
    "align": "left",
    "sortable": false,
    "name": "ville",
    "field": "ville"
  },
  {
    "label": "Tel",
    "align": "left",
    "sortable": false,
    "name": "tel",
    "field": "tel"
  },
  {
    "label": "Pieces Jointes",
    "align": "left",
    "sortable": false,
    "name": "pieces_jointes",
    "field": "pieces_jointes"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	gender: [    
{value: "M", label: "Monsieur"},
	{value: "Mme", label: "Madame"},
	{value: "Mlle", label: "Mlle"}
    ],
	courseslistheader: [
  {
    "label": "Creé Le",
    "align": "left",
    "sortable": false,
    "name": "date_created",
    "field": "date_created"
  },
  {
    "label": "Etat",
    "align": "left",
    "sortable": false,
    "name": "etat",
    "field": "etat"
  },
  {
    "label": "Assuré",
    "align": "left",
    "sortable": false,
    "name": "id_assure",
    "field": "id_assure"
  },
  {
    "label": "Zone",
    "align": "left",
    "sortable": false,
    "name": "zone",
    "field": "zone"
  },
  {
    "label": "Pieces Jointes",
    "align": "left",
    "sortable": false,
    "name": "pieces_jointes",
    "field": "pieces_jointes"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	nbPatients: [    
{value: "1", label: "1"},
	{value: "2", label: "2"},
	{value: "3", label: "3"},
	{value: "4", label: "4"}
    ],
	etat: [    
{value: "1", label: "Enregistrée"},
	{value: "2", label: "Validée"}
    ],
	coursesannexes4validesheader: [
  {
    "label": "Crée",
    "align": "left",
    "sortable": false,
    "name": "date_created",
    "field": "date_created"
  },
  {
    "label": "Fiche Assuré",
    "align": "left",
    "sortable": false,
    "name": "id_assure",
    "field": "id_assure"
  },
  {
    "label": "Etat",
    "align": "left",
    "sortable": false,
    "name": "etat",
    "field": "etat"
  },
  {
    "label": " Mis à Jour",
    "align": "left",
    "sortable": false,
    "name": "date_updated",
    "field": "date_updated"
  },
  {
    "label": "Zone",
    "align": "left",
    "sortable": false,
    "name": "zone",
    "field": "zone"
  },
  {
    "label": "Pieces Jointes",
    "align": "left",
    "sortable": false,
    "name": "pieces_jointes",
    "field": "pieces_jointes"
  },
  {
    "label": "Pec",
    "align": "left",
    "sortable": false,
    "name": "pec",
    "field": "pec"
  },
  {
    "label": "Minperc",
    "align": "left",
    "sortable": false,
    "name": "minperc",
    "field": "minperc"
  }
],
	coursesannexes4adminheader: [
  {
    "label": "Crée Le",
    "align": "left",
    "sortable": false,
    "name": "date_created",
    "field": "date_created"
  },
  {
    "label": "Taxi",
    "align": "left",
    "sortable": false,
    "name": "user_id",
    "field": "user_id"
  },
  {
    "label": "Etat",
    "align": "left",
    "sortable": false,
    "name": "etat",
    "field": "etat"
  },
  {
    "label": "Pieces Jointes",
    "align": "left",
    "sortable": false,
    "name": "pieces_jointes",
    "field": "pieces_jointes"
  },
  {
    "label": "Pec",
    "align": "left",
    "sortable": false,
    "name": "pec",
    "field": "pec"
  },
  {
    "label": "Minperc",
    "align": "left",
    "sortable": false,
    "name": "minperc",
    "field": "minperc"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	etat2: [    
{value: "3", label: "En cours de facturation"},
	{value: "4", label: "Facturée"},
	{value: "5", label: "Annulée (non facturable)"},
	{value: "1", label: "Renvoyer pour modification"}
    ],
	cpsvillesfrlistheader: [
  {
    "label": "Commune",
    "align": "left",
    "sortable": false,
    "name": "commune",
    "field": "commune"
  },
  {
    "label": "Code Postal",
    "align": "left",
    "sortable": false,
    "name": "code_postal",
    "field": "code_postal"
  },
  {
    "label": "Ligne 5",
    "align": "left",
    "sortable": false,
    "name": "ligne_5",
    "field": "ligne_5"
  },
  {
    "label": "Acheminement",
    "align": "left",
    "sortable": false,
    "name": "acheminement",
    "field": "acheminement"
  },
  {
    "label": "Gps",
    "align": "left",
    "sortable": false,
    "name": "gps",
    "field": "gps"
  }
],
	forfaittariflistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Value",
    "align": "left",
    "sortable": false,
    "name": "value",
    "field": "value"
  },
  {
    "label": "Label",
    "align": "left",
    "sortable": false,
    "name": "label",
    "field": "label"
  },
  {
    "label": "Zone",
    "align": "left",
    "sortable": false,
    "name": "zone",
    "field": "zone"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	minperclistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Zone",
    "align": "left",
    "sortable": false,
    "name": "zone",
    "field": "zone"
  },
  {
    "label": "Value",
    "align": "left",
    "sortable": false,
    "name": "value",
    "field": "value"
  },
  {
    "label": "Label",
    "align": "left",
    "sortable": false,
    "name": "label",
    "field": "label"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	noteslistheader: [
  {
    "label": "Date Saisie",
    "align": "left",
    "sortable": true,
    "name": "date_saisie",
    "field": "date_saisie"
  },
  {
    "label": "Titre",
    "align": "left",
    "sortable": false,
    "name": "titre",
    "field": "titre"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	permissionslistheader: [
  {
    "label": "Permission Id",
    "align": "left",
    "sortable": false,
    "name": "permission_id",
    "field": "permission_id"
  },
  {
    "label": "Permission",
    "align": "left",
    "sortable": false,
    "name": "permission",
    "field": "permission"
  },
  {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	roleId: [    
{value: "6", label: "Administrateur"},
	{value: "7", label: "Utilisateur"}
    ],
	roleslistheader: [
  {
    "label": "Role Id",
    "align": "left",
    "sortable": false,
    "name": "role_id",
    "field": "role_id"
  },
  {
    "label": "Role Name",
    "align": "left",
    "sortable": false,
    "name": "role_name",
    "field": "role_name"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	utilisateurslistheader: [
  {
    "label": "Login",
    "align": "left",
    "sortable": false,
    "name": "login",
    "field": "login"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Nom",
    "align": "left",
    "sortable": false,
    "name": "nom",
    "field": "nom"
  },
  {
    "label": "Prenom",
    "align": "left",
    "sortable": false,
    "name": "prenom",
    "field": "prenom"
  },
  {
    "label": "Date Naissance",
    "align": "left",
    "sortable": false,
    "name": "date_naissance",
    "field": "date_naissance"
  },
  {
    "label": "Entreprise",
    "align": "left",
    "sortable": false,
    "name": "entreprise",
    "field": "entreprise"
  },
  {
    "label": "Telephone",
    "align": "left",
    "sortable": false,
    "name": "telephone",
    "field": "telephone"
  },
  {
    "label": "Grade",
    "align": "left",
    "sortable": false,
    "name": "user_role_id",
    "field": "user_role_id"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	userRoleId: [    
{value: "6", label: "Admin"},
	{value: "7", label: "User"}
    ],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}