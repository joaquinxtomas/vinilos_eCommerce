CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `discount` INT,
   `image` VARCHAR(255),
   `categoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsCategory` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `productCategory` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `fullName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `categoryId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersCategory` (
   `id` INT NOT NULL,
   `userCategory` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_6002b82b-cf25-4c36-8bd2-0c88a3aaf458` FOREIGN KEY (`categoryId`) REFERENCES `productsCategory`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_84cfaafa-3c84-4c6b-bbd3-a88278a89498` FOREIGN KEY (`categoryId`) REFERENCES `usersCategory`(`id`)  ;
