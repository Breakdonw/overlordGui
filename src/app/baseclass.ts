    import { Component, Injectable } from "@angular/core";
    export type HID = string;
  /* The UserController class has a constructor that takes a HID and a string, and has properties hid,
  name, pin, hidPwd, comments, and lastLogin. */
    export class UserController{
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     * @param {HID} hid - The HID object that is used to communicate with the device.
     * @param {string} name - The name of the device.
     */
        constructor(hid  : HID, name : string){
            this.hid = hid;
            this.name = name;
        }
        hid: HID;
        name: string;
        private pin : number|undefined;
        private hidPwd: number |undefined ;
        comments: string|undefined;
        lastLogin: Date|undefined;
    }
    
    /* A program has a name, a path, an array of arguments, and a boolean value indicating whether it is
    installing or not. */
     export class Program {
    /**
     * The constructor function is a function that is called when an object is created from a class.
     * @param {string} name - The name of the program
     * @param {string} path - The path to the executable file.
     * @param {string[]} [args] - string[] - The arguments to pass to the program.
     */
        constructor(name: string, path:string, args?: string[]){
            this.name = name;
            this.path = path;
            this.args = args;
            this.installing = false;
        }
        name: string;
        path: string;
        args: string[] | undefined;
        installing: boolean;
    }
    
    /* The Computer class has a constructor that takes in a name, service tag, version, domain, current
    user, and assigned HID. It also has a method called assignedIsActiveUser that returns a boolean
    value. */
    export class  Computer {
    
        
    /**
     * The constructor function is a function that is called when an object is created from a class.
     * @param {string} name - The name of the computer
     * @param {string} serveTag - The service tag of the computer
     * @param {string} version - string
     * @param {string} domain - string
     * @param {string} currUser - string
     * @param {HID} assignedHID - is a class that has a string property called "HID"
     */
        constructor(name:string, serveTag:string,version:string,domain:string,currUser:string, assignedHID : HID )
        {
            this.name = name;
            this.serviceTag = serveTag;
            this.version = version;
            this.domain = domain;
            this.currentUser = currUser;
            this.assignedHID = assignedHID;
        }
    
    
    
    
    /**
     * If the current user is not the assigned user, then return false. Otherwise, return true.
     * @returns A boolean value.
     */
         assignedIsActiveUser(): boolean {
             if (this.currentUser != this.assignedHID)
             {
                 return false;
             }
             else{ return true; }
    
        }
    
     /**
      * The function getComputerName() returns a string.
      * @returns The name of the computer.
      */
        getComputerName(): string {
            return this.name;
        }
     
     
    /**
     * "This function takes a zone, device type, and a callback function as parameters, and then sets the
     * name of the computer to the zone, device type, and assigned HID, and then calls the callback
     * function."
     * @param {string} zone - The zone the computer is in.
     * @param {string} deviceType - The type of device you are creating.
     * @param {Function} callback - This is the function that will be called when the setComputerName
     * function is done.
     */
        setComputerName(zone:string, deviceType:string,callback:Function) {
            this.name = zone+deviceType+this.assignedHID;
            callback();
        }
    
    
    
        name:string;
        serviceTag: string;
        version: string;
        domain: string;
        currentUser: string;
        assignedHID : HID;
    }
    
    /* The command class is a class that contains two properties, type and command, and a constructor
    function that takes two parameters, type and command, and assigns them to the properties of the same
    name. */
     export class command {
        type:string;
        command:string;
      /**
       * The constructor function is a special function that is called when an object is created from a
       * class.
       * @param {string} type - The type of the command (PS, Bat).
       * @param {string} command - The command to be executed.
       */
        constructor(type:string, command:string)
        {
            this.type = type;
            this.command = command;
        }
        output:string | undefined;
    }
    
    