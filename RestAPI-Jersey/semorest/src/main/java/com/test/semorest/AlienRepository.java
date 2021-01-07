package com.test.semorest;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class AlienRepository {

	Session session = null;
	Transaction tx = null;

	public void getConection() {
		Configuration con = new Configuration().configure().addAnnotatedClass(Alien.class);

		ServiceRegistry reg = new ServiceRegistryBuilder().applySettings(con.getProperties()).buildServiceRegistry();

		SessionFactory sf = con.buildSessionFactory(reg);

		session = sf.openSession();

		tx = session.beginTransaction();
	}

	public List<Alien> getAlienfromDB() {
		getConection();
		Query q = session.createQuery("from Alien");
		List<Alien> aliens = q.list();
		tx.commit();
		return aliens;
	}

	public Alien getAlien(String nm) {
		getConection();
		Alien a=null;
		Query q = session.createQuery("from Alien as a where a.name='" + nm + "'");
		Object alien = (Object) q.uniqueResult();
		if(alien == null)
		{
			return new Alien();
		}
		
		tx.commit();
		return (Alien) alien;
			
	}

	public void create(Alien a) {

		getConection();
		session.save(a);
		tx.commit();
		System.out.println("create Method called");
	}

	public void updateAlienInDB(Alien a) {
		getConection();
		// update Alien set points='"+a.getPoints()+"' where name='"+a.getName()+"'"
		Query q = session.createQuery("update Alien as al set al.points=:p where al.name=:n");
		q.setParameter("p", a.getPoints());
		q.setParameter("n", a.getName());
		q.executeUpdate();
		tx.commit();
	}
	
	public void deleteAlien(String name) {
		
		getConection();
		Query q = session.createQuery("delete from Alien where name='"+name+"'");
		q.executeUpdate();
		tx.commit();
	}

}
