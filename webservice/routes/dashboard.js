const router = require('express').Router();
const { event } = require('../controllers');

// GET localhost:8080/event => Ambil data semua event
router.get('/dashboard', event.getDataruangan);

// GET localhost:8080/event/2 => Ambil data semua event berdasarkan id = 2
router.get('/dashboard/:id', event.getDataruanganByID);

// POST localhost:8080/event/add => Tambah data event ke database
router.post('/dashboard/add', event.addDataruangan);

// POST localhost:8080/event/2 => Edit data event
router.post('/dashboard/edit', event.editDataruangan);

// POST localhost:8080/event/delete => Delete data event
router.post('/dashboard/delete/', event.deleteDataruangan);
// GET localhost:8080/event => Ambil data semua event
router.get('/dashboard', event.getDataruangan);

// GET localhost:8080/event/2 => Ambil data semua event berdasarkan id = 2
router.get('/dashboard/:id', event.getDataruanganByID);

// POST localhost:8080/event/add => Tambah data event ke database
router.post('/dashboard/add', event.addDataruangan);

// POST localhost:8080/event/2 => Edit data event
router.post('/dashboard/edit', event.editDataruangan);

// POST localhost:8080/event/delete => Delete data event
router.post('/dashboard/delete/', event.deleteDataruangan);

// event
// GET localhost:8080/event => Ambil data semua event
router.get('/event', event.getDataevent);

// GET localhost:8080/event/2 => Ambil data semua event berdasarkan id = 2
router.get('/event/:id', event.getDataeventByID);

// POST localhost:8080/event/add => Tambah data event ke database
router.post('/event/add', event.addDataevent);

// POST localhost:8080/event/2 => Edit data event
router.post('/event/edit', event.editDataevent);

// POST localhost:8080/event/delete => Delete data event
router.post('/event/delete/', event.deleteDataevent);
// GET localhost:8080/event => Ambil data semua event
router.get('/event', event.getDataevent);

// GET localhost:8080/event/2 => Ambil data semua event berdasarkan id = 2
router.get('/event/:id', event.getDataeventByID);

// POST localhost:8080/event/add => Tambah data event ke database
router.post('/event/add', event.addDataevent);

// POST localhost:8080/event/2 => Edit data event
router.post('/event/edit', event.editDataevent);

// POST localhost:8080/event/delete => Delete data event
router.post('/event/delete/', event.deleteDataevent);

module.exports = router;