-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: phyto
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AMBIENTE`
--

DROP TABLE IF EXISTS `AMBIENTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AMBIENTE` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `ambiente` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AMBIENTE`
--

LOCK TABLES `AMBIENTE` WRITE;
/*!40000 ALTER TABLE `AMBIENTE` DISABLE KEYS */;
/*!40000 ALTER TABLE `AMBIENTE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CATEGORIA`
--

DROP TABLE IF EXISTS `CATEGORIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CATEGORIA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CATEGORIA`
--

LOCK TABLES `CATEGORIA` WRITE;
/*!40000 ALTER TABLE `CATEGORIA` DISABLE KEYS */;
/*!40000 ALTER TABLE `CATEGORIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CLADO`
--

DROP TABLE IF EXISTS `CLADO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CLADO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `clado` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLADO`
--

LOCK TABLES `CLADO` WRITE;
/*!40000 ALTER TABLE `CLADO` DISABLE KEYS */;
/*!40000 ALTER TABLE `CLADO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CLASSE`
--

DROP TABLE IF EXISTS `CLASSE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CLASSE` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `classe` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLASSE`
--

LOCK TABLES `CLASSE` WRITE;
/*!40000 ALTER TABLE `CLASSE` DISABLE KEYS */;
/*!40000 ALTER TABLE `CLASSE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CLIMA`
--

DROP TABLE IF EXISTS `CLIMA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CLIMA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `clima` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLIMA`
--

LOCK TABLES `CLIMA` WRITE;
/*!40000 ALTER TABLE `CLIMA` DISABLE KEYS */;
/*!40000 ALTER TABLE `CLIMA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `COR`
--

DROP TABLE IF EXISTS `COR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `COR` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `cor` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COR`
--

LOCK TABLES `COR` WRITE;
/*!40000 ALTER TABLE `COR` DISABLE KEYS */;
/*!40000 ALTER TABLE `COR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FAMILIA`
--

DROP TABLE IF EXISTS `FAMILIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FAMILIA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `familia` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAMILIA`
--

LOCK TABLES `FAMILIA` WRITE;
/*!40000 ALTER TABLE `FAMILIA` DISABLE KEYS */;
/*!40000 ALTER TABLE `FAMILIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FAVORITOS`
--

DROP TABLE IF EXISTS `FAVORITOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FAVORITOS` (
  `cod_usuario` int NOT NULL,
  `cod_planta` int NOT NULL,
  PRIMARY KEY (`cod_usuario`,`cod_planta`),
  KEY `cod_planta` (`cod_planta`),
  CONSTRAINT `FAVORITOS_ibfk_1` FOREIGN KEY (`cod_usuario`) REFERENCES `USUARIO` (`cod`) ON DELETE CASCADE,
  CONSTRAINT `FAVORITOS_ibfk_2` FOREIGN KEY (`cod_planta`) REFERENCES `PLANTA` (`cod`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAVORITOS`
--

LOCK TABLES `FAVORITOS` WRITE;
/*!40000 ALTER TABLE `FAVORITOS` DISABLE KEYS */;
/*!40000 ALTER TABLE `FAVORITOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FERTILIZACAO`
--

DROP TABLE IF EXISTS `FERTILIZACAO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FERTILIZACAO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `fertilizacao` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FERTILIZACAO`
--

LOCK TABLES `FERTILIZACAO` WRITE;
/*!40000 ALTER TABLE `FERTILIZACAO` DISABLE KEYS */;
/*!40000 ALTER TABLE `FERTILIZACAO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FILO`
--

DROP TABLE IF EXISTS `FILO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FILO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `filo` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FILO`
--

LOCK TABLES `FILO` WRITE;
/*!40000 ALTER TABLE `FILO` DISABLE KEYS */;
/*!40000 ALTER TABLE `FILO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FINALIDADE`
--

DROP TABLE IF EXISTS `FINALIDADE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FINALIDADE` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `finalidade` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FINALIDADE`
--

LOCK TABLES `FINALIDADE` WRITE;
/*!40000 ALTER TABLE `FINALIDADE` DISABLE KEYS */;
/*!40000 ALTER TABLE `FINALIDADE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GENERO`
--

DROP TABLE IF EXISTS `GENERO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `GENERO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `genero` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GENERO`
--

LOCK TABLES `GENERO` WRITE;
/*!40000 ALTER TABLE `GENERO` DISABLE KEYS */;
/*!40000 ALTER TABLE `GENERO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LUMINOSIDADE`
--

DROP TABLE IF EXISTS `LUMINOSIDADE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LUMINOSIDADE` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `luminosidade` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LUMINOSIDADE`
--

LOCK TABLES `LUMINOSIDADE` WRITE;
/*!40000 ALTER TABLE `LUMINOSIDADE` DISABLE KEYS */;
/*!40000 ALTER TABLE `LUMINOSIDADE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ORDEM`
--

DROP TABLE IF EXISTS `ORDEM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ORDEM` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `ordem` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ORDEM`
--

LOCK TABLES `ORDEM` WRITE;
/*!40000 ALTER TABLE `ORDEM` DISABLE KEYS */;
/*!40000 ALTER TABLE `ORDEM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERIODO_FLORACAO`
--

DROP TABLE IF EXISTS `PERIODO_FLORACAO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERIODO_FLORACAO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `periodo_floracao` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERIODO_FLORACAO`
--

LOCK TABLES `PERIODO_FLORACAO` WRITE;
/*!40000 ALTER TABLE `PERIODO_FLORACAO` DISABLE KEYS */;
/*!40000 ALTER TABLE `PERIODO_FLORACAO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PESQUISAR`
--

DROP TABLE IF EXISTS `PESQUISAR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PESQUISAR` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `cod_usuario` int DEFAULT NULL,
  `cod_planta` int DEFAULT NULL,
  PRIMARY KEY (`cod`),
  KEY `cod_usuario` (`cod_usuario`),
  KEY `cod_planta` (`cod_planta`),
  CONSTRAINT `PESQUISAR_ibfk_1` FOREIGN KEY (`cod_usuario`) REFERENCES `USUARIO` (`cod`),
  CONSTRAINT `PESQUISAR_ibfk_2` FOREIGN KEY (`cod_planta`) REFERENCES `PLANTA` (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PESQUISAR`
--

LOCK TABLES `PESQUISAR` WRITE;
/*!40000 ALTER TABLE `PESQUISAR` DISABLE KEYS */;
/*!40000 ALTER TABLE `PESQUISAR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PLANTA`
--

DROP TABLE IF EXISTS `PLANTA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PLANTA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(300) DEFAULT NULL,
  `nome_popular` varchar(100) DEFAULT NULL,
  `nome_cientifico` varchar(100) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `espinho` tinyint(1) DEFAULT NULL,
  `control_praga` tinyint(1) DEFAULT NULL,
  `replantio` tinyint(1) DEFAULT NULL,
  `limpeza` tinyint(1) DEFAULT NULL,
  `cod_categoria` int DEFAULT NULL,
  `cod_tamanho` int DEFAULT NULL,
  `cod_periodo_floracao` int DEFAULT NULL,
  `cod_ambiente` int DEFAULT NULL,
  `cod_finalidade` int DEFAULT NULL,
  `cod_cor` int DEFAULT NULL,
  `cod_tipo` int DEFAULT NULL,
  `cod_luminosidade` int DEFAULT NULL,
  `cod_rega` int DEFAULT NULL,
  `cod_fertilizacao` int DEFAULT NULL,
  `cod_tempo_colheita` int DEFAULT NULL,
  `cod_tecnica_cultivo` int DEFAULT NULL,
  `cod_reino` int DEFAULT NULL,
  `cod_filo` int DEFAULT NULL,
  `cod_clado` int DEFAULT NULL,
  `cod_classe` int DEFAULT NULL,
  `cod_familia` int DEFAULT NULL,
  `cod_ordem` int DEFAULT NULL,
  `cod_genero` int DEFAULT NULL,
  `cod_tipo_folha` int DEFAULT NULL,
  `cod_altitude` int DEFAULT NULL,
  `cod_clima` int DEFAULT NULL,
  `cod_solo` int DEFAULT NULL,
  `cod_umidade` int DEFAULT NULL,
  PRIMARY KEY (`cod`),
  KEY `cod_categoria` (`cod_categoria`),
  KEY `cod_tamanho` (`cod_tamanho`),
  KEY `cod_periodo_floracao` (`cod_periodo_floracao`),
  KEY `cod_ambiente` (`cod_ambiente`),
  KEY `cod_finalidade` (`cod_finalidade`),
  KEY `cod_cor` (`cod_cor`),
  KEY `cod_tipo` (`cod_tipo`),
  KEY `cod_luminosidade` (`cod_luminosidade`),
  KEY `cod_rega` (`cod_rega`),
  KEY `cod_fertilizacao` (`cod_fertilizacao`),
  KEY `cod_tempo_colheita` (`cod_tempo_colheita`),
  KEY `cod_tecnica_cultivo` (`cod_tecnica_cultivo`),
  KEY `cod_reino` (`cod_reino`),
  KEY `cod_filo` (`cod_filo`),
  KEY `cod_clado` (`cod_clado`),
  KEY `cod_classe` (`cod_classe`),
  KEY `cod_familia` (`cod_familia`),
  KEY `cod_ordem` (`cod_ordem`),
  KEY `cod_genero` (`cod_genero`),
  KEY `cod_tipo_folha` (`cod_tipo_folha`),
  KEY `cod_altitude` (`cod_altitude`),
  KEY `cod_clima` (`cod_clima`),
  KEY `cod_solo` (`cod_solo`),
  KEY `cod_umidade` (`cod_umidade`),
  CONSTRAINT `PLANTA_ibfk_1` FOREIGN KEY (`cod_categoria`) REFERENCES `CATEGORIA` (`cod`),
  CONSTRAINT `PLANTA_ibfk_10` FOREIGN KEY (`cod_fertilizacao`) REFERENCES `FERTILIZACAO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_11` FOREIGN KEY (`cod_tempo_colheita`) REFERENCES `TEMPO_COLHEITA` (`cod`),
  CONSTRAINT `PLANTA_ibfk_12` FOREIGN KEY (`cod_tecnica_cultivo`) REFERENCES `TECNICA_CULTIVO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_13` FOREIGN KEY (`cod_reino`) REFERENCES `REINO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_14` FOREIGN KEY (`cod_filo`) REFERENCES `FILO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_15` FOREIGN KEY (`cod_clado`) REFERENCES `CLADO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_16` FOREIGN KEY (`cod_classe`) REFERENCES `CLASSE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_17` FOREIGN KEY (`cod_familia`) REFERENCES `FAMILIA` (`cod`),
  CONSTRAINT `PLANTA_ibfk_18` FOREIGN KEY (`cod_ordem`) REFERENCES `ORDEM` (`cod`),
  CONSTRAINT `PLANTA_ibfk_19` FOREIGN KEY (`cod_genero`) REFERENCES `GENERO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_2` FOREIGN KEY (`cod_tamanho`) REFERENCES `TAMANHO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_20` FOREIGN KEY (`cod_tipo_folha`) REFERENCES `TIPO_FOLHA` (`cod`),
  CONSTRAINT `PLANTA_ibfk_21` FOREIGN KEY (`cod_altitude`) REFERENCES `ALTITUDE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_22` FOREIGN KEY (`cod_clima`) REFERENCES `CLIMA` (`cod`),
  CONSTRAINT `PLANTA_ibfk_23` FOREIGN KEY (`cod_solo`) REFERENCES `SOLO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_24` FOREIGN KEY (`cod_umidade`) REFERENCES `UMIDADE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_3` FOREIGN KEY (`cod_periodo_floracao`) REFERENCES `PERIODO_FLORACAO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_4` FOREIGN KEY (`cod_ambiente`) REFERENCES `AMBIENTE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_5` FOREIGN KEY (`cod_finalidade`) REFERENCES `FINALIDADE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_6` FOREIGN KEY (`cod_cor`) REFERENCES `COR` (`cod`),
  CONSTRAINT `PLANTA_ibfk_7` FOREIGN KEY (`cod_tipo`) REFERENCES `TIPO` (`cod`),
  CONSTRAINT `PLANTA_ibfk_8` FOREIGN KEY (`cod_luminosidade`) REFERENCES `LUMINOSIDADE` (`cod`),
  CONSTRAINT `PLANTA_ibfk_9` FOREIGN KEY (`cod_rega`) REFERENCES `REGA` (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PLANTA`
--

LOCK TABLES `PLANTA` WRITE;
/*!40000 ALTER TABLE `PLANTA` DISABLE KEYS */;
/*!40000 ALTER TABLE `PLANTA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REGA`
--

DROP TABLE IF EXISTS `REGA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REGA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `rega` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REGA`
--

LOCK TABLES `REGA` WRITE;
/*!40000 ALTER TABLE `REGA` DISABLE KEYS */;
/*!40000 ALTER TABLE `REGA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REINO`
--

DROP TABLE IF EXISTS `REINO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REINO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `reino` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REINO`
--

LOCK TABLES `REINO` WRITE;
/*!40000 ALTER TABLE `REINO` DISABLE KEYS */;
/*!40000 ALTER TABLE `REINO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SOLO`
--

DROP TABLE IF EXISTS `SOLO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SOLO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `solo` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SOLO`
--

LOCK TABLES `SOLO` WRITE;
/*!40000 ALTER TABLE `SOLO` DISABLE KEYS */;
/*!40000 ALTER TABLE `SOLO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TAMANHO`
--

DROP TABLE IF EXISTS `TAMANHO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TAMANHO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `tamanho` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TAMANHO`
--

LOCK TABLES `TAMANHO` WRITE;
/*!40000 ALTER TABLE `TAMANHO` DISABLE KEYS */;
/*!40000 ALTER TABLE `TAMANHO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TECNICA_CULTIVO`
--

DROP TABLE IF EXISTS `TECNICA_CULTIVO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TECNICA_CULTIVO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `tecnica_cultivo` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TECNICA_CULTIVO`
--

LOCK TABLES `TECNICA_CULTIVO` WRITE;
/*!40000 ALTER TABLE `TECNICA_CULTIVO` DISABLE KEYS */;
/*!40000 ALTER TABLE `TECNICA_CULTIVO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEMPO_COLHEITA`
--

DROP TABLE IF EXISTS `TEMPO_COLHEITA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TEMPO_COLHEITA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `tempo_colheita` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEMPO_COLHEITA`
--

LOCK TABLES `TEMPO_COLHEITA` WRITE;
/*!40000 ALTER TABLE `TEMPO_COLHEITA` DISABLE KEYS */;
/*!40000 ALTER TABLE `TEMPO_COLHEITA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TIPO`
--

DROP TABLE IF EXISTS `TIPO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TIPO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TIPO`
--

LOCK TABLES `TIPO` WRITE;
/*!40000 ALTER TABLE `TIPO` DISABLE KEYS */;
/*!40000 ALTER TABLE `TIPO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TIPO_FOLHA`
--

DROP TABLE IF EXISTS `TIPO_FOLHA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TIPO_FOLHA` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `tipo_folha` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TIPO_FOLHA`
--

LOCK TABLES `TIPO_FOLHA` WRITE;
/*!40000 ALTER TABLE `TIPO_FOLHA` DISABLE KEYS */;
/*!40000 ALTER TABLE `TIPO_FOLHA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UMIDADE`
--

DROP TABLE IF EXISTS `UMIDADE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UMIDADE` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `umidade` varchar(100) NOT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UMIDADE`
--

LOCK TABLES `UMIDADE` WRITE;
/*!40000 ALTER TABLE `UMIDADE` DISABLE KEYS */;
/*!40000 ALTER TABLE `UMIDADE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIO`
--

DROP TABLE IF EXISTS `USUARIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USUARIO` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `adm` tinyint(1) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cod`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIO`
--

LOCK TABLES `USUARIO` WRITE;
/*!40000 ALTER TABLE `USUARIO` DISABLE KEYS */;
/*!40000 ALTER TABLE `USUARIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manutenção`
--

DROP TABLE IF EXISTS `manutenção`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manutenção` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `manutenção` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manutenção`
--

LOCK TABLES `manutenção` WRITE;
/*!40000 ALTER TABLE `manutenção` DISABLE KEYS */;
/*!40000 ALTER TABLE `manutenção` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poda`
--

DROP TABLE IF EXISTS `poda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poda` (
  `cod` int NOT NULL AUTO_INCREMENT,
  `poda` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poda`
--

LOCK TABLES `poda` WRITE;
/*!40000 ALTER TABLE `poda` DISABLE KEYS */;
/*!40000 ALTER TABLE `poda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-07 16:51:51
