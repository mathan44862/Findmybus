-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: ticket
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tn56aq4882`
--

DROP TABLE IF EXISTS `tn56aq4882`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tn56aq4882` (
  `ticket` int DEFAULT NULL,
  `time` varchar(5) DEFAULT NULL,
  `stop` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tn56aq4882`
--

LOCK TABLES `tn56aq4882` WRITE;
/*!40000 ALTER TABLE `tn56aq4882` DISABLE KEYS */;
INSERT INTO `tn56aq4882` VALUES (0,'09:00',1),(1,'09:00',1),(2,'09:00',1),(3,'09:00',1),(4,'09:00',1),(5,'09:00',1),(6,'09:00',1),(7,'09:00',1),(8,'09:00',1),(9,'09:00',1),(10,'09:00',1),(11,'09:00',1),(12,'09:00',1),(13,'09:00',1),(14,'09:00',1),(15,'09:00',1),(16,'09:00',1),(17,'09:00',1),(18,'09:00',1),(19,'09:00',1),(20,'09:00',1),(21,'09:00',1),(22,'09:00',1),(23,'09:00',1),(24,'09:00',1),(25,'09:00',1),(26,'09:00',1),(27,'09:00',1);
/*!40000 ALTER TABLE `tn56aq4882` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tn56aq8899`
--

DROP TABLE IF EXISTS `tn56aq8899`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tn56aq8899` (
  `ticket` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tn56aq8899`
--

LOCK TABLES `tn56aq8899` WRITE;
/*!40000 ALTER TABLE `tn56aq8899` DISABLE KEYS */;
/*!40000 ALTER TABLE `tn56aq8899` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13 15:34:30
