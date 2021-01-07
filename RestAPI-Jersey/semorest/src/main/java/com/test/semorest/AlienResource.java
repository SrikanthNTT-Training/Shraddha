package com.test.semorest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("aliens")
public class AlienResource {

	AlienRepository repo = new AlienRepository();
	@GET
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public List<Alien> getAliens() {	
		//repo.updateAlienInDB();
		//List<Alien> aliens =repo.getAlienfromDB();	
		return repo.getAlienfromDB();
	}
	
	@GET
	@Path("alien/{id}")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public Alien getAliens(@PathParam("id") String id) {	
	return repo.getAlien(id);
	}
	
	@PUT
	@Path("alien")
	@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
	public Alien updateAlien(Alien a) {
		
		if(repo.getAlien(a.getName()).getName() == (null))
		{
			repo.create(a);
		}
		else
		{
			 repo.updateAlienInDB(a);
		}
		
		 return a;
	}
	
	@POST
	@Path("alien")
	public Alien createAlien(Alien a)
	{
		System.out.println("createAlien Method called");
		System.out.println(a);
		repo.create(a);
		return a;
	}
	
	@DELETE
	@Path("alien/{name}")
	public Alien deleteAlien(@PathParam("name") String nm)
	{
		Alien a= repo.getAlien(nm);
		if(a.getName() !=null)
		{
		repo.deleteAlien(nm);
		}
		return a;
		
	}
}
