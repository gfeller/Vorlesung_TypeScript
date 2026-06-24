// FIX: Dependency Inversion Principle (DIP)
// FavouritesController depended on the concrete CookiePersistanceService.
// Now it depends on the IPersistanceService abstraction, so any implementation
// can be injected without modifying the controller.

interface IPersistanceService {
    save(entity: any): number;
}

class DbPersistanceService implements IPersistanceService {
    public save(entity: any): number {
        const id: number = Math.floor((Math.random() * 100) + 1);
        // DB persistance logic...
        return id;
    }
}

class CookiePersistanceService implements IPersistanceService {
    public save(entity: any): number {
        const id: number = Math.floor((Math.random() * 100) + 1);
        // Cookie persistance logic...
        return id;
    }
}

class FavouritesController {
    private persistanceService: IPersistanceService;

    constructor(persistanceService: IPersistanceService) {
        this.persistanceService = persistanceService;
    }

    public saveAsFavourite(articleId: number): number {
        return this.persistanceService.save(articleId);
    }
}

const favController = new FavouritesController(new CookiePersistanceService());
const favControllerDb = new FavouritesController(new DbPersistanceService());
