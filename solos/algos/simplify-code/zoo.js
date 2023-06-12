'use strict'

export class ZooInspector {
    constructor(imageRecognitionSystem, inspectionLog) {
        this.imageRecognitionSystem = imageRecognitionSystem;
        this.inspectionLog = inspectionLog;
    }

    inspect(zoo) {
        const inspectionStatuses = [];
        let zooWarningStatus = false;

        zoo.getEnclosures().forEach(enclosure => {
            const enclosureImage = this.makePicture(zoo, enclosure, false);
            const enclosureStatus = this.imageRecognitionSystem.recognizeEnclosureStatus(enclosure, enclosureImage);
            if (!enclosureStatus.isEnclosureSafe()) {
                zoo.closeEnclosure(enclosure);
                zoo.requestSecurityTo(enclosure);
                zoo.requestMaintenanceCrewTo(enclosure);
                this.addWarningToStatuses(enclosure, inspectionStatuses, false);
                zooWarningStatus = true;
            }
            const animalImage = this.makePicture(zoo, enclosure, true);
            const animalStatus = this.imageRecognitionSystem.recognizeAnimalStatus(enclosure.getAnimal(), animalImage);
            if (animalStatus.isAnimalSick()) {
                zoo.closeEnclosure(enclosure);
                zoo.requestVeterinaryTo(enclosure.getAnimal());
                this.addWarningToStatuses(enclosure, inspectionStatuses, true);
                zooWarningStatus = true;
            }
        });
        inspectionStatuses.push(`ZOO#${zoo.getId()}#${zooWarningStatus ? 'WARNING' : 'OK'}`);
        this.inspectionLog.log(inspectionStatuses);
    }

    makePicture(zoo, enclosure, isAnimal) {
        if (isAnimal) {
            return zoo.capturePictureOf(enclosure.getAnimal());
        } else {
            return zoo.capturePictureOf(enclosure);
        }
    }

    addWarningToStatuses(enclosure, statuses, isAnimal) {
        statuses.push(`${isAnimal ? 'ANIMAL' : 'ENCLOSURE'}#${isAnimal ? enclosure.getAnimal().getName() : enclosure.getId()}#WARNING`);
    }
}
