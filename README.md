# bootcamp-app

### **requirements**
- [Git](https://github.com/git-guides/install-git)
- [Docker](https://docs.docker.com/desktop/)
- [NodeJS](https://nodejs.org/en/)

### **backend setup**
Change to `/backend` directory

`cd backend`

Install node package requirements

`npm install`

Start Docker (postgresql database)

`docker-compose up`

In a seperate shell, run server

`npm run dev`

### **frontend setup**

In a seperate shell, change to `/frontend` directory

`cd frontend`

Install node package requirements

`npm install`

Start

`npm run dev`


### **trouble shooting**

`sudo lsof -i :5432` - to check what’s running on the port 5432

`launchctl list` - to show all processes

find the process from that list and then

`launchctl remove <name_from_list_command>` - to remove it
